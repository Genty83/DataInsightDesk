import { Layout } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";

const Wrapper = createStyledShell(Layout.Footer);

const AppFooter = () => {
  return (
    <Wrapper height="35px" variant="solid" role="banner">
      Footer
    </Wrapper>
  );
};

export default AppFooter;