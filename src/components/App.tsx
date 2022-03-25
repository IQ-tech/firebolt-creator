import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import BaseStyles from "./BaseStyles";
import theme from "@/theme";
import EditorPage from "@/pages/EditorPage";
import RegisterPage from "@/pages/RegisterPage";
import InternalLayouts from "./layout/InternalLayouts";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <BaseStyles />
        <Routes>
          <Route path="/" element={<RegisterPage />}/>
          <Route path="/app" element={<InternalLayouts />}>
            <Route path="editor" element={<EditorPage />} />
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
