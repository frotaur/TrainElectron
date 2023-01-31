// With "createEditor", exposed by ipc, I should be able to create the editor
//let amdLoader=require("../node_modules/monaco-editor/min/vs/loader.js");
import * as monaco from 'monaco-editor';

monaco.editor.create(document.getElementById('container'), {
	value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
	language: 'javascript'
});
