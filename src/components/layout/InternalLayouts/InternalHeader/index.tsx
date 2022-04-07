import React from "react";
import { useTheme } from "@emotion/react";
import FireboltLogo from "../../../common/icons/fireboltLogo";
import { Layout, Image, Menu, Breadcrumb, Avatar } from "antd";
import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";


const { Header } = Layout;

const HeaderInternal = () => {
  const theme = useTheme();

  return (
    <Header
      css={{
        color: theme?.colors?.["white"],
        backgroundColor: "#001529",
        width: "100%",
        height: "48px",
        fontWeight: 500,
        // position: "fixed",
        // top: 0,
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

      <div
       css={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        maxHeight: "48px"
      }}>
        <a
        css={{
          color: "white",
          textDecoration: "none",
          cursor: "pointer"
        }}
          href="https://iq-tech.github.io/firebolt-docs/en/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <QuestionCircleOutlined />
        </a>
       
        <Avatar shape="square" size="small" icon={<UserOutlined />} />
        <p>Serati Ma</p>
    </div>
    </Header>
  );
};

export default HeaderInternal;