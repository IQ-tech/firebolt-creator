import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";

import theme from "@/theme";
import { JSONProvider } from "@/context/JSONContext";
import BaseStyles from "./components/BaseStyles";
import InternalLayouts from "@/components/layout/InternalLayouts";
import RegisterPage from "@/pages/RegisterPage";
import EditorPage from "@/pages/Editor";
import MainTab from "@/pages/Editor/MainTab";
import FlowsTab from "@/pages/Editor/FlowsTab";
import JsonSchema from "@/pages/Editor/JSONTab";

import "antd/dist/antd.css";
import "iq-blueberry/dist/styles.css";
import '@iq-firebolt/client/dist/main.css'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <JSONProvider>
        <BaseStyles />
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/app" element={<InternalLayouts />}>
            <Route path="editor" element={<EditorPage />}>
              <Route path="main" element={<MainTab />} />
              <Route path="flows" element={<FlowsTab />} />
              <Route path="jschema" element={<JsonSchema />} />
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
