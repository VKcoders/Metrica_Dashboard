const { app, BrowserWindow } = require("electron");
// const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // icon: path.join(__dirname, 'Logo.ico'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Carregar o arquivo index.html gerado pelo Vite
  // win.loadFile(path.join(__dirname, "dist/index.html"));
  // win.loadFile(__dirname, "dist/index.html")

  win.loadURL(`file://${__dirname}/index.html`)
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

