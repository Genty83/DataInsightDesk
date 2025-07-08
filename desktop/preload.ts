import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  controlWindow: (action: "minimize" | "maximize" | "restore" | "close") =>
    ipcRenderer.send("window-control", action),

  onWindowStateChange: (callback: (event: unknown, state: { isMaximized: boolean }) => void) =>
    ipcRenderer.on("window-state-changed", callback),

  removeWindowStateChange: (callback: (event: unknown, state: { isMaximized: boolean }) => void) =>
    ipcRenderer.removeListener("window-state-changed", callback),
});
