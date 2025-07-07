import React from "react";
import styled from "styled-components";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

// Styled base wrapper (minimal, themeable)
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// Props
interface ShellComponentWrapperProps<T extends ElementType> {
  as?: T;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Component
const ShellComponentWrapper = <T extends ElementType = "div">(
  props: ShellComponentWrapperProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ShellComponentWrapperProps<T>>
) => {
  const { as: Component = "div", children, ...rest } = props;

  return (
    <Wrapper as={Component} {...rest}>
      {children}
    </Wrapper>
  );
};

export default ShellComponentWrapper;
