import { Layout } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";

const Wrapper = createStyledShell(Layout.Content);

const AppContent = () => {
  return (
    <Wrapper height="100%" variant="solid" role="content" style={{ borderLeftWidth: "4px"}}>
      Content
    </Wrapper>
  );
};

export default AppContent;