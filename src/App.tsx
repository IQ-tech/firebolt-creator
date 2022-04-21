import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import BaseStyles from "./components/BaseStyles";
import 'antd/dist/antd.css';
import theme from "@/theme";
import RegisterPage from "@/pages/RegisterPage";
import InternalLayouts from "@/components/layout/InternalLayouts";
import EditorPage from "@/pages/Editor";
import MainTab from "@/pages/Editor/MainTab"
import TracksTab from "@/pages/Editor/TracksTab";
import JsonSchema from "@/pages/Editor/JSONTab";
import "iq-blueberry/dist/styles.css";
// import MainPage from "@/pages/MainPage";
import { JSONProvider } from '@/context/JSONContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BaseStyles />
        <JSONProvider>
          <Routes>
            <Route path="/" element={<RegisterPage />}/>
            <Route path="/app" element={<InternalLayouts />}>
              <Route path="editor" element={<EditorPage />}>
                <Route path="main" element={<MainTab />} />
                <Route path="tracks" element={<TracksTab />} />
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
