import { SYSTEM_PROMPT, MODEL_NAME } from "./types/config.js";
import { functionList } from "./functions/functionList.js";
import { sumData, getLastName } from "./functions/sumData.js";

// Type definition for messages sent to Azure OpenAI client
export type Message = {
	role: 'system' | 'user' | 'assistant' | 'tool';
	name?: string;
	content?: string;
	tool_calls?: { [key: string]: any }[];
	tool_call_id?: string;
};

// Initial system prompt
const initializerPrompt = { role: "system", content: SYSTEM_PROMPT };

// Function to process tool calls
function processToolCall(toolCall: any) {
	const args = JSON.parse(toolCall.function.arguments);
	// Add new functions to this conditional
	if (toolCall.function.name === "sumData") {
		return sumData(args);
	}
	else if (toolCall.function.name === "getLastName") {
		return getLastName(args.firstName);
	}
	console.log("Unknown tool call: ", toolCall.function.name);
	process.exit(1);
}

// Function to output the response stream from the Azure OpenAI client
async function showStream(stream: ReadableStream) {
	let responseText = "";
	const finalToolCalls: { [key: string]: any } = {};

	// Tee stream into two consumable streams
	const [stream1, stream2] = stream.tee();

	// Stream response and handle tool calls
	for await (const chunk of stream1) {
		const toolCalls = chunk.choices?.[0]?.delta?.tool_calls || [];
		for (const toolCall of toolCalls) {
			const { index } = toolCall;	
			if (!finalToolCalls[index]) {
				finalToolCalls[index] = toolCall;
			}
			finalToolCalls[index].function.arguments += toolCall.function.arguments;
		}
	}
	// If there are no tool calls, stream response text
	if (Object.keys(finalToolCalls).length == 0) {
		process.stdout.write("Assistant: ");
		for await (const chunk of stream2) {
			const chunkText = chunk.choices?.[0]?.delta?.content || "";
			process.stdout.write(chunkText);
			responseText += chunkText;
		}
		console.log();
	}
	
	return { responseText, finalToolCalls };
}

// Function to send a message and receive a response from the Azure OpenAI client
export async function sendReceiveMessage(client: Promise<any>, messages: Message[]) {
	try {
		// Define stream parameters
		const streamParams = {
			messages: [initializerPrompt, ...messages],
			max_tokens: 4096,
			temperature: 1,
			model: MODEL_NAME,
			tools: functionList,
			tool_choice: "auto",
			stream: true
		};

		// Send the input to the Azure OpenAI client
		let stream = await (await client).chat.completions.create(streamParams);
		let { responseText, finalToolCalls } = await showStream(stream);
		
		// console.log("FINAL TOOL CALLS: ", finalToolCalls[0]); // Debug line for OpenAI's tool calls
		
		// If there are tool calls, process them
		if (finalToolCalls && Object.keys(finalToolCalls).length > 0) {
			// Append function call to messages
			messages.push({
				role: "assistant",
				tool_calls: Object.values(finalToolCalls)
			});
			
			// Execute tool call and append results to messages
			for (const toolCall of Object.values(finalToolCalls)) {
				// console.log("Processing tool call: ", toolCall.function.name); // Debug line for each tool call
				const functionResult = processToolCall(toolCall);
				// console.log("Function result: ", functionResult); // Debug line for function result
				messages.push({
					role: "tool",
					name: toolCall.function.name,
					tool_call_id: toolCall.id,
					content: JSON.stringify(functionResult),
				});
			}
			
			// Update messages and send prompt again with the tool results
			streamParams.messages = [initializerPrompt, ...messages];
			stream = await (await client).chat.completions.create(streamParams);
			
			// Receive new response text after processing tool calls
			({ responseText, finalToolCalls } = await showStream(stream));
		}

		return responseText;

	} catch (err) {
	console.error("Error in sending prompt:", err);
	return null;
	}
}


// TODO: clean up the process of pushing to messages
//       - maybe abstract stream object type
//       - there are message pushes in the tool processing but the final response is pushed outside of the function