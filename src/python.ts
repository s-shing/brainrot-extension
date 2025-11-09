import { spawn } from 'child_process';
import * as vscode from 'vscode';

export function Compile(filename: string){
    let filepath =  __dirname.replace("\\out","");
    filepath = filepath.replaceAll("\\","/")
    const pythonProcess = spawn('python3', ["-u",filepath+"/brainrot.py", filename], {  cwd: filepath  });  
    const outputChannel = vscode.window.createOutputChannel('Output');
    pythonProcess.stdout.on('data', data => {
        console.log(`stdout:\n${data}`);
         outputChannel.appendLine(data);
        outputChannel.show();


    })
    pythonProcess.stderr.on("data", (data) => {
        console.log(`stdout: ${data}`);
            outputChannel.appendLine(data);
        outputChannel.show();
    });
    pythonProcess.on('exit', code => {
        console.log(`Process ended with ${code}`);
        outputChannel.appendLine(`Process ended with ${code}`);
        outputChannel.show();
    })
}
