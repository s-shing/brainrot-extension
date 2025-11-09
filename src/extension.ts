import * as vscode from 'vscode';
import {Compile} from "./python";
import { init_client_server } from './server/startServer';

let vidDict = {"oversensory":"7568990861531385143", "peachyslime":"7570402732197137677","nocopyrightgameplay2":"7467001786117672214","familyguy.v01":"7570028390435179779"}

export async function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "brainrot-extension" is now active!');
	// vscode.commands.registerCommand('brainrot.tiktok', () => {
		
	// })
	
	let runCommand = vscode.commands.registerCommand('brainrot.compile', () => {
		const editor = vscode.window.activeTextEditor;
		console.log(Compile(editor?.document.fileName as string));
	})

	let panel = vscode.window.createWebviewPanel('tiktok', 'Tiktok Brainrot', vscode.ViewColumn.Beside,{enableScripts: true}) 
  while(true){
    for (const [key, value] of Object.entries(vidDict)) {	
    panel.webview.html = getWebviewContent(key,value);
    await delay(15000);
  }


};

	init_client_server();


}
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
function getWebviewContent(username:string, vidId:string){
	return `<blockquote 
				class="tiktok-embed" 
				cite="https://www.tiktok.com/@${username}/video/${vidId}"
				data-video-id="${vidId}" 
				style="max-width: 320px; max-height:600px;" 
			>
				<section></section>
			</blockquote>
			<script async src="https://www.tiktok.com/embed.js"></script>`
			
}

// This method is called when your extension is deactivated
export function deactivate() {}
