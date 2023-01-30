const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');


async function getResolved(event, relpath) {
    console.log("relpath : ", relpath);
    return path.resolve(relpath).replace(/\\/g, '/');
}


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
          }
    });
    ipcMain.handle('getResolved', getResolved);
    win.loadFile('./html/index.html');
}

app.whenReady().then(() => {createWindow();});