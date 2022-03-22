import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import FireboltLogo from "../common/icons/fireboltLogo";
import HamburgerMenu from "@/components/common/HamburgerButton";
import { Layout, Image, Menu, Breadcrumb } from "antd";

interface HeaderProps {
  toggleMenu(...args: any): any;
  isMenuOpen: boolean;
}
const { Header } = Layout;

const HeaderInternal: React.FC<HeaderProps> = ({ toggleMenu, isMenuOpen }) => {
  const theme = useTheme();
  const [positionHeader, setPositionHeader]:
    | [string, Dispatch<SetStateAction<string>>]
    | any = useState("sticky");

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        return setPositionHeader("fixed");
      }
      if (window.pageYOffset < 50) {
        return setPositionHeader("sticky");
      }
    };
  }, [positionHeader]);

  return (
    <Header
      css={{
        color: theme?.colors?.["white"],
        // backgroundColor: theme?.colors?.["blue-teal"],
        backgroundColor: "#001529",
        width: "100%",
        height: "48px",
        fontWeight: 500,
        position: positionHeader,
        top: 0,
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        justifyContent: "space-between",
      }}
    >
      <div
        css={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <FireboltLogo />
        Firebolt creator
      </div>
      <div>
        <HamburgerMenu isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
    </Header>
  );
};

export default HeaderInternal;
