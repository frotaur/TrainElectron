const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let amdLoader = require('../node_modules/monaco-editor/min/vs/loader.js')
console.log(amdLoader)
async function getResolved(event, relpath) {
    console.log("relpath : ", relpath);
    return path.resolve(relpath).replace(/\\/g, '/');
}


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    });
    ipcMain.handle('getResolved', getResolved);
    win.loadFile('./html/index.html');
}

app.whenReady().then(() => {createWindow();});