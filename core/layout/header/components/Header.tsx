import { Layout } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";

const StyledHeader = createStyledShell(Layout.Header);

const AppHeader = () => {
  return (
    <StyledHeader height="45px" variant="solid" role="banner">
      {/* Header content goes here */}
    </StyledHeader>
  );
};

export default AppHeader;
