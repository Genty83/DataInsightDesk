import { Layout, Flex } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";
// Component imports
import WindowControls from "./WindowControls";

const StyledHeader = createStyledShell(Layout.Header);

const AppHeader = () => {
  return (
    <StyledHeader
      height="45px"
      variant="solid"
      justify="space-between"
      role="banner"
      dragRegion="drag"
    >
      {/** Application Title Section */}
      <Flex>DataInsightDesk</Flex>
      {/** Center Controls Section */}

      {/** Window Controls Section */}
      <WindowControls />
    </StyledHeader>
  );
};

export default AppHeader;
