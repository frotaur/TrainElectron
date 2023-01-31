const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('getResolved',(data) => ipcRenderer.invoke('getResolved',data));

