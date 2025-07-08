
import { Layout, Splitter } from "antd";
import AppHeader from "./header/components/AppHeader";
import AppFooter from "./footer/components/AppFooter";
import AppSidebar from "./sidebar/components/AppSidebar";
import AppRibbon from "./ribbon/components/AppRibbon";
import AppContent from "./content/components/AppContent";
import AppExplorer from "./explorer/components/AppExplorer";


const AppShellLayout = () => {

  return (
    <Layout
      style={{
        width: "100vw",
        height: "100vh",
        padding: "3px",
        gap: "3px",
      }}
    >
      <AppHeader />
      <Layout style={{ gap: "3px" }}>
        <AppSidebar />
        <Layout style={{ gap: "3px" }}>
          <AppRibbon />
          <Splitter>
          <Splitter.Panel defaultSize={300} min={200} max={500}>
            <AppExplorer />
          </Splitter.Panel>
          <Splitter.Panel>
            <AppContent />
          </Splitter.Panel>
        </Splitter>
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  )
}

export default AppShellLayout;