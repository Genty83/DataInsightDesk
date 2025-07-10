import { Layout } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";
import { Outlet } from "react-router-dom";

const Wrapper = createStyledShell(Layout.Content);

const AppContent = () => {
  return (
    <Wrapper height="100%" variant="solid" role="content" style={{ borderLeftWidth: "4px"}}>
      <Outlet />
    </Wrapper>
  );
};

export default AppContent;