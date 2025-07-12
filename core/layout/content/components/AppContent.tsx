import { Layout } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";
import { AppRouter } from "../../../routing/AppRouter";

const Wrapper = createStyledShell(Layout.Content);

const AppContent = () => {
  return (
    <Wrapper height="100%" variant="solid" role="content" style={{ borderLeftWidth: "4px"}}>
      <AppRouter />
    </Wrapper>
  );
};

export default AppContent;