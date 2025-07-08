import React, { type ReactNode } from "react";
import { ConfigProvider } from "antd";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeConfig } from "./theme.config";

export type ThemeMode = keyof typeof themeConfig;

interface ThemeProviderWrapperProps {
  children: ReactNode;
  mode?: ThemeMode;
}

/**
 * Combines Ant Design's ConfigProvider with styled-components' ThemeProvider,
 * keeping both theme systems in sync.
 */
const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
  mode = "light",
}) => {
  const antdThemeConfig = themeConfig[mode];

  return (
    <ConfigProvider theme={antdThemeConfig}>
      <StyledThemeProvider theme={antdThemeConfig.token ?? {}}>
        {children}
      </StyledThemeProvider>
    </ConfigProvider>
  );
};

export default ThemeProviderWrapper;
