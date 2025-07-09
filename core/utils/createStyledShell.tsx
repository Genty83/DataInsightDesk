import styled, { css } from "styled-components";
import type { ComponentType } from "react";

// ✅ Token-based base styles from Ant Design theme
const tokenBaseStyles = css`
  background-color: ${({ theme }) => theme.colorBgContainer};
  color: ${({ theme }) => theme.colorTextBase};
  border: 1px solid ${({ theme }) => theme.colorBorder};
  border-radius: ${({ theme }) => theme.borderRadius}px;
`;

// ✅ Common layout styles
const layoutBaseStyles = css`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

// ✅ Visual style variants
const variants = {
  solid: css`
    background-color: ${({ theme }) => theme.colorBgContainer};
    border: 1px solid ${({ theme }) => theme.colorBorder};
  `,
  ghost: css`
    background-color: transparent;
    border: none;
  `,
  outlined: css`
    background-color: transparent;
    border: 1px dashed ${({ theme }) => theme.colorBorder};
  `,
};

// ✅ Props interface
export interface StyledShellProps {
  variant?: keyof typeof variants;
  height?: string;
  padding?: string;
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  dragRegion?: "drag" | "no-drag"; // new prop
}

// ✅ Factory for styled shell components
export function createStyledShell<P = unknown>(
  Component: ComponentType<P>
) {
  return styled(Component)<P & StyledShellProps>`
    ${tokenBaseStyles}
    ${layoutBaseStyles}

    ${({ height }) => height && `height: ${height};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ align }) => align && `align-items: ${align};`}
    ${({ justify }) => justify && `justify-content: ${justify};`}
    ${({ variant = "solid" }) => variants[variant]}
    ${({ dragRegion = "no-drag" }) =>
      dragRegion === "drag"
        ? " -webkit-app-region: drag;"
        : " -webkit-app-region: no-drag;"}
  `;
}
