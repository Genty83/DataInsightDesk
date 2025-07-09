import React, { type ReactNode } from "react";
import { ConfigProvider } from "antd";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeConfig } from "./theme.config";
import { useRibbonStore } from "../layout/ribbon/store/ribbonStore";

/**
 * Combines Ant Design's ConfigProvider with styled-components' ThemeProvider,
 * keeping both theme systems in sync with Zustand.
 */
const ThemeProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const themeMode = useRibbonStore((state) => state.themeMode); // reactive mode
  const antdThemeConfig = themeConfig[themeMode];

  return (
    <ConfigProvider theme={antdThemeConfig}>
      <StyledThemeProvider theme={antdThemeConfig.token ?? {}}>
        {children}
      </StyledThemeProvider>
    </ConfigProvider>
  );
};

export default ThemeProviderWrapper;
