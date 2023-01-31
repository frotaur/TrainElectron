

require.config({ paths: { vs: '../node_modules/monaco-editor/min/vs' } });

console.log(require);


require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(document.getElementById('container'), {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
        language: 'python', theme : 'hc-black'
    });
    return editor
});
