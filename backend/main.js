const { app, BrowserWindow } = require('electron');
const path = require('path');

console.log("path:", path.join(__dirname, 'preload.js'))
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
          }
    });

    win.loadFile('./html/index.html');
}

async function create() {
    await app.whenReady();
    createWindow();
}

create();