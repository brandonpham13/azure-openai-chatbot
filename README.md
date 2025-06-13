# azure-openai-chatbot
This is a prototype chatbot that enables users to chat with GPT in the CLI using Azure's OpenAI API. 

## Instructions to run the chatbot

The project is configured to have build tasks ran from the `NPM` CLI's [run-script](https://docs.npmjs.com/cli/commands/npm-run-script) system.

1. Install the dependencies using:
`npm install`

2. Run the build command: `npm run build`

3. Start the client: `npm run start`

The transpiled output will be located in `./bin` folder. The only files/folders needed to execute/package this project are:

- `/node_modules/`
- `/bin/`
- `package.json`
