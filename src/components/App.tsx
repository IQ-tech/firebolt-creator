import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "@/pages/RegisterPage";
import MainPage from "@/pages/MainPage";
import InternalLayouts from "./layout/InternalLayouts";
import theme from "@/theme";
import BaseStyles from "./BaseStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BaseStyles />
        <Routes>
          <Route path="/" element={<RegisterPage/>}/>
          <Route path="/app" element={<InternalLayouts/>}>
            <Route path="main" element={<MainPage/>} />
            <Route path="tracks" element={<p>Tracks</p>}/>
            <Route path="jschema" element={<p>Json Schema</p>}/>
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
