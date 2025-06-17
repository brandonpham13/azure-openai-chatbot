import readline from "readline";
import { showResponseStream } from "./chat.js";
import type { Message } from "./chat.js";
import { MODEL_NAME } from "./types/config.js";

export function startCLI(client: Promise<any>) {
    // Create a readline interface for user input
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Listen for SIGINT
    rl.on("SIGINT", () => {
        process.stdout.write("\nExiting the chatbot.\n");
        rl.close();
        setTimeout(() => process.exit(0), 100); // Allow time for the message to be printed
    });

    const messages: Message[] = [];

    function promptUser() {
        rl.question("User: ", async (userInput: string) => {
            try {
                // Check if the input is empty
                if (!userInput.trim()) {
                    console.log("Please enter a valid input.");
                    return promptUser();
                }

                // Exit if the user types 'exit'
                if (userInput.toLowerCase() === "exit") {
                    console.log("Exiting the chatbot.");
                    rl.close();
                    process.exit(0);
                }

                // Add user input to messages
                messages.push({ role: "user", content: userInput });
                
                // Show the response stream from the Azure OpenAI client
                const reply = await showResponseStream(await client, messages, MODEL_NAME);
                
                // Add the assistant's reply to messages
                if (reply) {
                    messages.push({ role: "assistant", content: reply });
                }

            } catch (err) {
                console.error("Error in sending prompt:", err);
            }

            promptUser(); // Next input
        });
    }

    promptUser(); // Start the prompt loop
}