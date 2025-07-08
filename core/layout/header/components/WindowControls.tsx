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

const WindowControls: React.FC = () => {
  const { isMaximized, toggleMaximize } = useHeaderStore();

  const WindowButtonsConfig: WindowControlsProps[] = [
    {
      icon: <MinusOutlined />,
      tooltip: "Minimize",
      onClick: () => console.log("Minimize clicked"), // TODO: wire to Electron
    },
    {
      icon: isMaximized ? <BlockOutlined /> : <BorderOutlined />,
      tooltip: isMaximized ? "Restore" : "Maximize",
      onClick: toggleMaximize,
    },
    {
      icon: <CloseOutlined />,
      tooltip: "Close",
      onClick: () => console.log("Close clicked"), // TODO: wire to Electron
    },
  ];

  return (
    <Flex justify="end" align="center" gap={8}>
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
