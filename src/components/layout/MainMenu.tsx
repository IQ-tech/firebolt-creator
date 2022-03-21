import React from "react";
import { darken } from "polished";
import { useTheme } from "@emotion/react";

import MainMenuItem from "./MainMenuItem";

interface MainMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const theme = useTheme();
  return (
    <div
      css={{
        backgroundColor: darken(0.1, theme?.colors?.["blue-teal"]),
        width: "100%",
        height: "100vh",
        zIndex: 1,
        position: "fixed",
        top: "-100%",
        transition: "transform 0.3s ease",
        transform: `translateY(${isMenuOpen ? "100%" : "0"})`,
        willChange: "transform",
        paddingTop: "80px",
      }}
    >
      <ul
        css={{
          paddingTop: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MainMenuItem label="Home" path="/" onClick={toggleMenu} />
        <MainMenuItem
          label="Second page"
          path="/second-page"
          onClick={toggleMenu}
        />
        <MainMenuItem
          label="Third page"
          path="/second-page"
          onClick={toggleMenu}
        />
      </ul>
    </div>
  );
};

export default MainMenu;
