const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#070a12',
    icon: path.join(__dirname, '../public/profile.jpg'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // In production, load the built dist/index.html
  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
