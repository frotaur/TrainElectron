// With "createEditor", exposed by ipc, I should be able to create the editor
//let amdLoader=require("../node_modules/monaco-editor/min/vs/loader.js");

console.log("DANS RENDERER : ",amdRequire);

async function createEditor() {
    let monacoPath = '../node_modules/monaco-editor/min';

    monacoPath= await getResolved(monacoPath);
    
    if (monacoPath.length > 0 && monacoPath.charAt(0) !== '/') {
        monacoPath = '/' + monacoPath;
    }
    monacoPath = encodeURI('file://' + monacoPath);

    amdRequire.config({
        baseUrl: monacoPath
    });
    console.log("monacopath : ", monacoPath);
    amdRequire(['vs/editor/editor.main'], function () {
        let editorio = monaco.editor.create(thediv, {
            value: ['def x() :', '\tprint("Hello world!")',''].join('\n'),
            language: 'javascript'
        });
    });

}  
daresult = createEditor();