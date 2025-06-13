import { AzureOpenAI } from "openai";
import { DefaultAzureCredential, getBearerTokenProvider } from "@azure/identity";

export async function connectAzureOpenAIClient(endpoint: string, modelName: string, apiVersion: string) {
    // Set options for openAI client creation
    const credential = new DefaultAzureCredential();
    const scope = "https://cognitiveservices.azure.com/.default";
    const azureADTokenProvider = getBearerTokenProvider(credential, scope);

    // Bundle options and create client
    const options = { endpoint, azureADTokenProvider, modelName, apiVersion };
    return new AzureOpenAI(options);
}