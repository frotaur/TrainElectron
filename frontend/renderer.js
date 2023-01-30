

self.MonacoEnvironment = {
    getWorkerUrl: function(moduleId, label) {
        if (label === 'javascript') {
            return './ts.worker.bundle.js'
        } else {
            return './editor.worker.bundle.js'
        }
    }
};

console.log("I have access to monaco ! : ", monaco.editor)
console.log("YOUHOU");
monaco.editor.create(document.getElementById('container'), {
    value: [`function x(){\n \tconsole.log("Hello worlds!");\n}`],
    language: 'javascript'
});