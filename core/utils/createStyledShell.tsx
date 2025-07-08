import styled, { css } from "styled-components";
import type { ComponentType } from "react";

// ✅ Theme-driven base styles
const tokenBaseStyles = css`
  background-color: ${({ theme }) => theme.colorBgContainer};
  color: ${({ theme }) => theme.colorTextBase};
  border: 1px solid ${({ theme }) => theme.colorBorder};
  border-radius: ${({ theme }) => theme.borderRadius}px;
`;

const layoutBaseStyles = css`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;

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

// ✅ Props to control layout styling
export interface StyledShellProps {
  variant?: keyof typeof variants;
  height?: string;
  padding?: string;
  center?: boolean;
}

// ✅ Safe, typed generic version (no `any`)
export function createStyledShell<P = unknown>(
  Component: ComponentType<P>
) {
  return styled(Component)<P & StyledShellProps>`
    ${tokenBaseStyles}
    ${layoutBaseStyles}

    ${({ height }) => height && `height: ${height};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ center }) => center && "justify-content: center;"}
    ${({ variant = "solid" }) => variants[variant]}
  `;
}
