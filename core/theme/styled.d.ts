// core/theme/styled.d.ts

import "styled-components";
import type { GlobalToken } from "antd/es/theme/interface"; // use this path

declare module "styled-components" {
  export interface DefaultTheme extends Partial<GlobalToken> {
    customProperty?: string;
  }
}
