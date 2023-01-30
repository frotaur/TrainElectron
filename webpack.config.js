const path = require('path');

module.exports = {
    entry : { 
        'app' : './renderer.js',
        'editor.worker': 'node_modules/monaco-editor/esm/vs/editor/editor.worker.js'
        },
    output : {
        globalObject: 'self',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.ttf$/,
                use:['file-loader']
            }
        ]
    }
};

console.log("The path : ", path.resolve(__dirname,'dist'));