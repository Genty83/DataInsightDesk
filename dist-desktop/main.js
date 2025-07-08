"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
// Helper for resolving paths in both dev and prod
const isDev = !electron_1.app.isPackaged;
let mainWindow = null;
function createMainWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 1024,
        minHeight: 640,
        show: false,
        frame: false, // custom title bar
        webPreferences: {
            preload: path_1.default.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    if (isDev) {
        mainWindow.loadURL("http://localhost:5173");
    }
    else {
        mainWindow.loadFile(path_1.default.join(__dirname, "../dist/index.html"));
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
electron_1.app.whenReady().then(createMainWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        electron_1.app.quit();
});
electron_1.app.on("activate", () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        createMainWindow();
});
electron_1.ipcMain.on("window-control", (_, action) => {
    if (!mainWindow)
        return;
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
//# sourceMappingURL=main.js.map