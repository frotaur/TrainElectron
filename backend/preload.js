const { contextBridge, ipcRenderer } = require('electron');



contextBridge.exposeInMainWorld('getResolved',(data) => ipcRenderer.invoke('getResolved',data));
contextBridge.exposeInMainWorld('amdRequire', amdLoader.require);

