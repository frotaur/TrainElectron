const { contextBridge, ipcRenderer } = require('electron');
let amdLoader = require("../node_modules/monaco-editor/dev/vs/loader.js");

//const serializedConfig = contextBridge.serialize(amdLoader.require.config);
//const exposedLoader = { ...amdLoader, require: { ...amdLoader.require, config: serializedConfig } };
//console.log("DALOADER : ", exposedLoader);
//contextBridge.exposeInMainWorld('loader', exposedLoader);
console.log("DANS PRELOAD : ", amdLoader.require);
// Simply expose the function "createEditor"

contextBridge.exposeInMainWorld('getResolved',(data) => ipcRenderer.invoke('getResolved',data));
contextBridge.exposeInMainWorld('amdRequire', amdLoader.require);

