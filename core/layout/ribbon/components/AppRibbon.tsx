import { Flex, Tooltip, Switch, Button } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";
import { MenuFoldOutlined } from "@ant-design/icons";
import { useRibbonStore } from "../store/ribbonStore";

const Wrapper = createStyledShell(Flex);
const RibbonMenu = createStyledShell(Flex);
const RibbonContent = createStyledShell(Flex);

const AppRibbon = () => {
  const { themeMode, toggleTheme } = useRibbonStore();

  return (
    <Wrapper vertical variant="ghost" padding="0px">
      <RibbonMenu
        height="40px"
        variant="ghost"
        align="center"
        justify="space-between"
        role="menu"
        style={{ width: "100%" }}
      >
        <Flex>
          <Tooltip title="Toggle Sidebar">
            <Button type="text" icon={<MenuFoldOutlined />} />
          </Tooltip>
        </Flex>
        <Flex align="center" gap="10px">
          Toggle Theme Mode:
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            checked={themeMode === "dark"}
            onChange={toggleTheme}
          />
        </Flex>
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
