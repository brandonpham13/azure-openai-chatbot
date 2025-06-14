import { connectAzureOpenAIClient } from "./auth.js";
import { startCLI } from "./cli.js";
import * as config from "./types/config.js";

async function main() {

  // Connect to the Azure OpenAI client
  const client = connectAzureOpenAIClient(config.endpoint, config.modelName, config.apiVersion);

  console.log("Chatbot ready. Ask me anything: ");
  startCLI(client);
} 

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

// TODO: - Index sample data
// TODO: - hard code system prompt into model (portal)
// TODO: - allow users to change previous messages
// TODO: - ensure that users cannot change the system prompt
//         - maybe use a separate system prompt for the CLI?
// TODO: - input santization & other security measures

