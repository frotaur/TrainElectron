const { contextBridge } = require('electron');
const monaco = require('monaco-editor');

//contextBridge.exposeInMainWorld('editor', editor);
contextBridge.exposeInMainWorld('monaco', monaco);