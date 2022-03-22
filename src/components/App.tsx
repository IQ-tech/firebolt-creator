import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import BaseStyles from "./BaseStyles";
import theme from "@/theme";
import EditorPage from "@/pages/EditorPage";
import InternalLayouts from "./layout/InternalLayouts";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div
        css={(theme) => ({
          backgroundColor: theme?.colors?.["cream-tusk"],
          width: "100vw",
          height: "100vh",
        })}
      >
        <BaseStyles />
        <Routes>
          <Route
            path="/"
            element={<p style={{ fontSize: "40px" }}>HOME<a href="/app"> Click GO /app </a></p>}
          />

          <Route path="/app" element={<InternalLayouts />}>
            <Route path="editor" element={<EditorPage />} />
          </Route>

          <Route
            path="*"
            element={<p style={{ fontSize: "40px" }}>NOT FOUND</p>}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
