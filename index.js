//what is this index.js file for???

// нужно ли каждый раз комитить package и package lock json???
const path = require('path');
const url = require('url');

//what is this for???
//why do we use app and browserwindow as object onwards???
const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
    
    //how does this new BrowserWindow work???
    win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }, 
        cababilities: {
            'browsername': 'chrome'
        }
    });

    //why is win now a structure???
    //how does loadURL func work???

    //url.format() is depricated as legacy since node v11 
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    //does release version need this open dev tools thing???
    win.webContents.openDevTools();

    //what is this " , () => " funciton format of js???
    //what is this .on thing. is it some kind of command handler???
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});
