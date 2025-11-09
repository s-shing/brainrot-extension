// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "brainrot-extension" is now active!');
	init_client_server();

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('brainrot-extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from brainrot extension!');
	});

	context.subscriptions.push(disposable);
}

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind,
} from "vscode-languageclient/node";

import * as path from 'path';

let client: LanguageClient;

function init_client_server() {
	// The server is implemented in node
  const serverModule = __dirname + "\\server\\server.js"

  console.log(serverModule)

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.stdio },
    debug: {
      module: serverModule,
      transport: TransportKind.stdio,
    },
  };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for all documents by default
    documentSelector: [{ scheme: "file", language: "*" }],
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      //fileEvents: workspace.createFileSystemWatcher("**/.clientrc"),
    },
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    "REPLACE_ME language-server-id",
    "REPLACE_ME language server name",
    serverOptions,
    clientOptions
  );

  // Start the client. This will also launch the server
  client.start();
}

// This method is called when your extension is deactivated
export function deactivate() {}
