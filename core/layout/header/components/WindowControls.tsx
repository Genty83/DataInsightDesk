import { useEffect } from "react";
import { Flex, Tooltip, Button } from "antd";
import type { ReactNode } from "react";
import {
  BorderOutlined,
  BlockOutlined,
  CloseOutlined,
  MinusOutlined,
} from "@ant-design/icons";

import { useHeaderStore } from "../store/store";

interface WindowControlsProps {
  icon: ReactNode;
  label?: string;
  onClick?: () => void;
  tooltip?: string;
  disabled?: boolean;
  danger?: boolean;
}

interface DragSafeStyle extends React.CSSProperties {
  WebkitAppRegion?: "drag" | "no-drag";
}

const WindowControls: React.FC = () => {
  const { isMaximized, setMaximized } = useHeaderStore();

  // Listen for real window state changes from Electron
  useEffect(() => {
    const handler = (
      _event: unknown,
      { isMaximized }: { isMaximized: boolean }
    ) => {
      setMaximized(isMaximized);
    };

    window.electronAPI?.onWindowStateChange(handler);

    return () => {
      window.electronAPI?.removeWindowStateChange?.(handler); // optional cleanup if exposed
    };
  }, [setMaximized]);

  const WindowButtonsConfig: WindowControlsProps[] = [
    {
      icon: <MinusOutlined />,
      tooltip: "Minimize",
      onClick: () => window.electronAPI?.controlWindow("minimize"),
    },
    {
      icon: isMaximized ? <BlockOutlined /> : <BorderOutlined />,
      tooltip: isMaximized ? "Restore" : "Maximize",
      onClick: () =>
        window.electronAPI?.controlWindow(isMaximized ? "restore" : "maximize"),
    },

    {
      icon: <CloseOutlined />,
      tooltip: "Close",
      onClick: () => window.electronAPI?.controlWindow("close"),
    },
  ];

  return (
    <Flex justify="end" align="center" gap={8} style={{ WebkitAppRegion: "no-drag" } as DragSafeStyle}>
      {WindowButtonsConfig.map((button, index) => (
        <Tooltip key={index} title={button.tooltip}>
          <Button
            type="text"
            icon={button.icon}
            onClick={button.onClick}
            disabled={button.disabled}
            danger={button.danger}
            aria-label={button.tooltip}
          />
        </Tooltip>
      ))}
    </Flex>
  );
};

export default WindowControls;
