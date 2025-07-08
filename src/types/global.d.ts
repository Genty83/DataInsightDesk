interface Window {
  electronAPI: {
    controlWindow: (action: "minimize" | "maximize" | "restore" | "close") => void;
    onWindowStateChange: (callback: (event: unknown, state: { isMaximized: boolean }) => void) => void;
    removeWindowStateChange: (callback: (event: unknown, state: { isMaximized: boolean }) => void) => void;
  };
}
