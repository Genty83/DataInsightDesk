import { Layout } from "antd";
import styled from "styled-components";


const StyledHeader = styled(Layout.Header)`
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colorBgContainer};
  color: ${({ theme }) => theme.colorTextBase};
  border: ${({ theme }) => `1px solid ${theme.colorBorder}`};
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
`;

const AppHeader = () => {

  return (
    <StyledHeader role="banner">
    </StyledHeader>
  )
}

export default AppHeader;