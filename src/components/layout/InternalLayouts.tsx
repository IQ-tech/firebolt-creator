import React from "react";
import { Route, Outlet } from "react-router-dom";
import useApp from "../App.hook";
import HeaderInternal from "./InternalHeader";
import MainMenu from "./MainMenu";

const InternalLayouts = () => {
  const { isMenuOpen, toggleMenu } = useApp();
  return (
    <>
      <HeaderInternal isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MainMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <p>1outro PARANAUE</p>
      <p>2outro PARANAUE</p>
      <p>3outro PARANAUE</p>
      <Outlet />
    </>
  );
};

export default InternalLayouts;
