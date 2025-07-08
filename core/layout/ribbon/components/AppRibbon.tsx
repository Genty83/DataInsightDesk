import { Flex } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";

const Wrapper = createStyledShell(Flex);
const RibbonMenu = createStyledShell(Flex);
const RibbonContent = createStyledShell(Flex);

const AppRibbon = () => {
  return (
    <Wrapper vertical variant="ghost" padding="0px">
      <RibbonMenu
        height="40px"
        variant="ghost"
        role="menu"
        style={{ width: "100%" }}
      >
        Ribbon Menu
      </RibbonMenu>
      <RibbonContent
        height="45px"
        variant="solid"
        role="content"
        style={{ width: "100%" }}
      >
        Ribbon Content
      </RibbonContent>
    </Wrapper>
  );
};

export default AppRibbon;
