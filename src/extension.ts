import * as vscode from 'vscode';
import {Compile} from "./python";
import { init_client_server } from './server/startServer';


let vidDict = {"oversensory":"7568990861531385143", "peachyslime":"7570402732197137677","nocopyrightgameplay2":"7467001786117672214","familyguy.v01":"7570028390435179779"}

export async function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "brainrot-extension" is now active!');
	// vscode.commands.registerCommand('brainrot.tiktok', () => {
		
	// })
	init_client_server(context);

	let runCommand = vscode.commands.registerCommand('brainrot.compile', () => {
		const editor = vscode.window.activeTextEditor;
		Compile(editor?.document.fileName as string);
	})

	tiktokPopout();



}

async function tiktokPopout(){
	let panel = vscode.window.createWebviewPanel('tiktok', 'Tiktok Brainrot', vscode.ViewColumn.Beside,{enableScripts: true}) 
	while(true){
	for (const [key, value] of Object.entries(vidDict)) {	
		panel.webview.html = getWebviewContent(key,value);
		await delay(15000);
	}}
}


function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
function getWebviewContent(username:string, vidId:string){
	return `<iframe height="400" width= "220" src="https://www.tiktok.com/player/v1/${vidId}?&music_info=1&description=1&autoplay=1"  title="test"></iframe>`
	
			
}

// This method is called when your extension is deactivated
export function deactivate() {}
