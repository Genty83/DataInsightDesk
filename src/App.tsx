import { BrowserRouter } from "react-router-dom";
import ThemeProviderWrapper from "../core/theme/ThemeProviderWrapper";
import AppShellLayout from "../core/layout/AppShellLayout";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProviderWrapper>
        <AppShellLayout />
      </ThemeProviderWrapper>
    </BrowserRouter>
  );
};

export default App;