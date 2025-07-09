/**
 * Theme configuration for Ant Design.
 * This file defines the theme settings for the application.
 */

import type { ThemeConfig } from "antd";

const sharedStyles = {
  fontSize: 12,
  borderRadius: 8,
}

// Light mode theme configuration
const lightTheme: ThemeConfig = {
  token: {
    ...sharedStyles,
    colorPrimary: "hsl(169, 72.70%, 31.60%)",
    colorBgBase: "hsl(170, 17.60%, 93.30%)",
    colorBgContainer: "hsl(210, 20%, 100%)",
    colorBgLayout: "hsl(170, 17.60%, 93.30%)",
    colorBgBlur: "hsla(210, 100%, 98%, 0.8)",
    colorBgMask: "hsla(210, 100%, 98%, 0.5)",
    colorBgElevated: "hsl(210, 20%, 100%)", 
    colorBgSpotlight: "hsl(210, 20%, 40%)",
    colorTextBase: "hsl(210, 10%, 20%)",
    colorBorder: "hsl(210, 20%, 90%)",
  },
};

// Dark mode theme configuration
const darkTheme: ThemeConfig = {
  token: {
    ...sharedStyles,
    colorPrimary: "hsl(210, 100%, 50%)",
    colorBgBase: "hsl(210, 20%, 10%)",
    colorBgContainer: "hsl(210, 20%, 15%)",
    colorBgLayout: "hsl(210, 20%, 10%)",
    colorBgBlur: "hsla(210, 20%, 10%, 0.8)",
    colorBgMask: "hsla(210, 20%, 10%, 0.5)",
    colorBgElevated: "hsl(210, 20%, 15%)", 
    colorBgSpotlight: "hsl(210, 20%, 20%)",
    colorTextBase: "hsl(210, 10%, 90%)",
    colorBorder: "hsl(210, 20%, 30%)",
  },
};  

/**
 * Returns a unified theme object containing both light and dark themes.
 * 
 * @param light - Light mode theme configuration
 * @param dark - Dark mode theme configuration
 * @returns Object with `light` and `dark` theme configs
 */
const getThemeConfig = (
  light: ThemeConfig,
  dark: ThemeConfig
): { light: ThemeConfig; dark: ThemeConfig } => {
  return {
    light: { ...light },
    dark: { ...dark },
  };
};

export const themeConfig = getThemeConfig(lightTheme, darkTheme);
