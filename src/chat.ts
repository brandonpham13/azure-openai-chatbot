import { SYSTEM_PROMPT } from "./types/config.js";

export type Message = {
    role: 'system' | 'user' | 'assistant';
    content: string;
};

// Initial system prompt
const initializerPrompt = { role: "system", content: SYSTEM_PROMPT };

export async function showResponseStream(client: Promise<any>, messages: Message[], modelName: string) {
    try {
        // Send the input to the Azure OpenAI client
        const stream = await (await client).chat.completions.create({
            messages: [initializerPrompt, ...messages],
            max_tokens: 4096,
            temperature: 1,
            model: modelName,
            stream: true
          });

          let responseText = "";
          process.stdout.write("Assistant: ");

          // Output the assistant's response stream
          for await (const chunk of stream) {  
            const chunkText = chunk.choices?.[0]?.delta?.content || "";
            process.stdout.write(chunkText);
            responseText += chunkText;
          }

          console.log();
          return responseText;

        } catch (err) {
          console.error("Error in sending prompt:", err);
          return null;
        }
}
