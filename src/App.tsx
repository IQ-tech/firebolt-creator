import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import theme from "@/theme";
import { JSONProvider } from "@/contexts/JSONContext";
import BaseStyles from "./components/BaseStyles";
import InternalLayouts from "@/components/layout/InternalLayouts";
import RegisterPage from "@/pages/RegisterPage";
import EditorPage from "@/pages/Editor";
import TabLoader from "./components/TabLoader";

import "antd/dist/antd.css";
import "iq-blueberry/dist/styles.css";
import "@iq-firebolt/client/dist/main.css";

const MainTab = React.lazy(() => import("@/pages/Editor/MainTab"));
const FlowsTab = React.lazy(() => import("@/pages/Editor/FlowsTab"));
const JsonTab = React.lazy(() => import("@/pages/Editor/JSONTab"));

const RouteLoader = ({ children }) => (
  <React.Suspense fallback={<TabLoader />}>{children}</React.Suspense>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <JSONProvider>
        <BaseStyles />
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/app" element={<InternalLayouts />}>
            <Route path="editor" element={<EditorPage />}>
              <Route
                path="main"
                element={
                  <RouteLoader>
                    <MainTab />
                  </RouteLoader>
                }
              />
              <Route
                path="flows"
                element={
                  <RouteLoader>
                    <FlowsTab />
                  </RouteLoader>
                }
              />
              <Route
                path="jschema"
                element={
                  <RouteLoader>
                    <JsonTab />
                  </RouteLoader>
                }
              />
            </Route>
          </Route>
          <Route
            path="*"
            element={<p style={{ fontSize: "40px" }}>NOT FOUND</p>}
          />
        </Routes>
      </JSONProvider>
    </ThemeProvider>
  );
}

export default App;
