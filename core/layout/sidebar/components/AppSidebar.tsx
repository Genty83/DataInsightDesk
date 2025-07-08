import { Layout } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";

const Wrapper = createStyledShell(Layout.Sider);

const AppSidebar = () => {
  return (
    <Wrapper width={300} height="100%" variant="solid" role="banner">
      Sidebar
    </Wrapper>
  );
};

export default AppSidebar;