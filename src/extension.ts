import * as vscode from 'vscode';
import {Compile} from "./python";

let vidDict = {"oversensory":"7568990861531385143", "peachyslime":"7570402732197137677","nocopyrightgameplay2":"7467001786117672214","familyguy.v01":"7570028390435179779"}

export async function activate(context: vscode.ExtensionContext) {
  	let panel: vscode.WebviewPanel | undefined = undefined;	
	console.log('Congratulations, your extension "brainrot-extension" is now active!');
	// vscode.commands.registerCommand('brainrot.tiktok', () => {
		
	// })
	let runCommand = vscode.commands.registerCommand('brainrot.compile', () => {
		const editor = vscode.window.activeTextEditor;
		Compile(editor?.document.fileName as string);
	})
	if (panel){
		panel.reveal(vscode.window.activeTextEditor);
	} else{
	 panel = vscode.window.createWebviewPanel('tiktok', 'Tiktok Brainrot', vscode.ViewColumn.Beside,{enableScripts: true}) 
for (const [key, value] of Object.entries(vidDict)) {	
	 panel.webview.html = getWebviewContent(key,value);
	await delay(15000);

}};


}
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
function getWebviewContent(username:string, vidId:string){
	return `<blockquote 
				class="tiktok-embed" 
				data-video-id="${vidId}" 
				style="max-width: 320px; max-height:600px;" 
			>
				<section></section>
			</blockquote>
			<script async src="https://www.tiktok.com/embed.js"></script>`
}

// This method is called when your extension is deactivated
export function deactivate() {}
