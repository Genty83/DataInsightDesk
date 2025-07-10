// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import ThemeProviderWrapper from "../core/theme/ThemeProviderWrapper";
import { AppRouter } from "../core/routing/AppRouter";

const App = () => {
  return (
    <ThemeProviderWrapper>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProviderWrapper>
  );
};

export default App;
