const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');


module.exports = {
	entry: {
		app: './frontend/renderer.js',
	},
	output: {
		filename: 'jeezus.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.ttf$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [new MonacoWebpackPlugin('[name].fag.js','/',['typescript'])]
};
