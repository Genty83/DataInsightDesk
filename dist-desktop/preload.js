"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("electronAPI", {
    controlWindow: (action) => electron_1.ipcRenderer.send("window-control", action),
    onWindowStateChange: (callback) => electron_1.ipcRenderer.on("window-state-changed", callback),
    removeWindowStateChange: (callback) => electron_1.ipcRenderer.removeListener("window-state-changed", callback),
});
//# sourceMappingURL=preload.js.map