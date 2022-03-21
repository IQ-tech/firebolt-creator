import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import BaseStyles from "./BaseStyles";
import theme from "@/theme";

import useApp from "./App.hook";

import Header from "./layout/Header";
import MainMenu from "./layout/MainMenu";

function App() {
  const { isMenuOpen, toggleMenu } = useApp();

  return (
    <ThemeProvider theme={theme}>
      <div
        css={(theme) => ({
          backgroundColor: theme?.colors?.["cream-tusk"],
          width: "100vw",
          height: "100vh",
        })}
      >
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <MainMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <BaseStyles />
        <Routes>
          <Route path="/" element={<p>primeira página</p>} />
          <Route path="/second-page" element={<p>segunda página</p>} />
          <Route path="*" element={<p>not found</p>} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
