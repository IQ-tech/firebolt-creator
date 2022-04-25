import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { Button, Space, Typography } from "antd";
import BigFireboltLogo from "@/components/common/icons/bigFireboltLogo";
import GlobalIocn from "@/components/common/icons/globalIcon";
import GithubIcon from "@/components/common/icons/githubIcon";
import JSONModal from "@/components/JSONModal";

const { Text } = Typography;

export const globalIconStyles = css({
  minWidth: "100vw",
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "16px",
  paddingRight: "23px",
});

const RegisterPage = () => {
  return (
    <Space
      align="center"
      direction="vertical"
      css={(theme) => ({
        backgroundColor: theme?.colors?.["grey"],
        backgroundImage:
          "url('../components/common/icons/backgroundRegisterPage.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      })}
    >
      <a
        css={globalIconStyles}
        href="https://iq-tech.github.io/firebolt-docs/en/introduction/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlobalIocn />
      </a>
      <Space
        align="center"
        direction="vertical"
        css={{ paddingTop: "230px" }}
        size="large"
      >
        <BigFireboltLogo />
        <Text type="secondary">
          Firebolt is a multistep form experiences creator
        </Text>
      </Space>
      <Space size="large" css={{ paddingTop: "97px" }}>
        <Link to="/app/editor/main">
          <Button css={{ width: "172.27px" }} type="primary" size="large">
            {" "}
            Create Form{" "}
          </Button>
        </Link>
        <JSONModal />
      </Space>
      <Space align="center" direction="vertical" css={{ paddingTop: "300px" }}>
        <Space size="large">
          <Text type="secondary">Firebolt</Text>
          <GithubIcon />
          <Text type="secondary">iq tech</Text>
        </Space>
        <p css={{ color: "rgba(0, 0, 0, 0.25)" }}>
          Copyright ©2022 Produced by iq tech team
        </p>
      </Space>
    </Space>
  );
};

export default RegisterPage;
