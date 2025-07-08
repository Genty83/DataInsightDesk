import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

// Helper for resolving paths in both dev and prod
const isDev = !app.isPackaged;

let mainWindow: BrowserWindow | null = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 640,
    show: false,
    frame: false, // custom title bar
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  mainWindow.on("maximize", () => {
    mainWindow?.webContents.send("window-state-changed", { isMaximized: true });
  });

  mainWindow.on("unmaximize", () => {
    mainWindow?.webContents.send("window-state-changed", { isMaximized: false });
  });
}

app.whenReady().then(createMainWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});

ipcMain.on("window-control", (_, action: string) => {
  if (!mainWindow) return;
  switch (action) {
    case "minimize":
      mainWindow.minimize();
      break;
    case "maximize":
      mainWindow.maximize();
      break;
    case "restore":
      mainWindow.restore();
      break;
    case "close":
      mainWindow.close();
      break;
  }
});
