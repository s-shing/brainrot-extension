import { spawn } from 'child_process';

export function Compile(filename: string){
    let filepath =  __dirname.replace("\\out","");
    filepath = filepath.replaceAll("\\","/")
    const pythonProcess = spawn('python3', ["-u",filepath+"/brainrot.py", filename], {  cwd: filepath  });  

    pythonProcess.stdout.on('data', data => {
        console.log(`stdout:\n${data}`);

    })
    pythonProcess.stderr.on("data", (data) => {
        console.log(`stdout: ${data}`);
    });
    pythonProcess.on('exit', code => {
        console.log(`Process ended with ${code}`);
    })
}
