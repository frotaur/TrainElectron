const { contextBridge, ipcRenderer } = require('electron');
const amdRequire = require("../node_modules/monaco-editor/min/vs/loader.js");
const amdConfig = amdRequire.require.config;
console.log("FUCK CONFIG : ", amdRequire);
// Simply expose the function "createEditor"

contextBridge.exposeInMainWorld('getResolved',(data) => ipcRenderer.invoke('getResolved',data));
contextBridge.exposeInMainWorld('amdRequire', amdRequire);
contextBridge.exposeInMainWorld('amdconfig', amdConfig);