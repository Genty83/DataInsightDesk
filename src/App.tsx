import ThemeProviderWrapper from "../core/theme/ThemeProviderWrapper";
import AppShellLayout from "../core/layout/AppShellLayout";

const App = () => {
  return (
    <ThemeProviderWrapper mode="dark">
      <AppShellLayout />
    </ThemeProviderWrapper>
  );
};

export default App;
