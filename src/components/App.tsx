import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import BaseStyles from "./BaseStyles";
import theme from "@/theme";
import RegisterPage from "@/pages/RegisterPage";
import InternalLayouts from "@/components/layout/InternalLayouts";
import EditorPage from "@/pages/Editor";
import MainTab from "@/pages/Editor/MainTab"
import TracksTab from "@/pages/Editor/TracksTab";


function App() {
  return (
    <ThemeProvider theme={theme}>
        <BaseStyles />
        <Routes>
          <Route path="/" element={<RegisterPage />}/>
          <Route path="/app" element={<InternalLayouts />}>
            <Route path="editor" element={<EditorPage />}>
              <Route path="main" element={<MainTab />} />
              <Route path="tracks" element={<TracksTab />} />
              <Route path="jschema" element={<p>Json Schema</p>} />
            </Route>
          </Route>
          <Route
            path="*"
            element={<p style={{ fontSize: "40px" }}>NOT FOUND</p>}
          />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
