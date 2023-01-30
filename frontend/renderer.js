// With "createEditor", exposed by ipc, I should be able to create the editor

console.log("Amdrequire is what ? : ",amdRequire);

async function createEditor() {
    let monacoPath = './node_modules/monaco-editor/min/vs/editor/editor.main';

    monacoPath= getResolved(monacoPath);

    if (monacoPath.length > 0 && monacoPath.charAt(0) !== '/') {
        monacoPath = '/' + monacoPath;
    }
    monacoPath = encodeURI('file://' + monacoPath);

    amdconfig({
        baseUrl: monacoPath
    });
    console.log("monacopath : ", monacoPath);
    amdRequire.require([monacoPath], function () {
        let editorio = monaco.editor.create(thediv, {
            value: ['def x() :', '\tprint("Hello world!")',''].join('\n'),
            language: 'javascript'
        });
    });

}  
daresult = createEditor();