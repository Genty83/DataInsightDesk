import { Flex } from "antd";
import { createStyledShell } from "../../../utils/createStyledShell";

const Wrapper = createStyledShell(Flex);

const AppExplorer = () => {
  return (
    <Wrapper
      height="100%"
      variant="ghost"
      role="navigation"
      style={{ width: "100%" }}
    >
      Explorer
    </Wrapper>
  );
};

export default AppExplorer;
