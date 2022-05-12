import { css } from "@emotion/react";
import { Button, Space, Typography } from "antd";
import BigFireboltLogo from "@/components/common/icons/bigFireboltLogo";
import GlobalIocn from "@/components/common/icons/globalIcon";
import GithubIcon from "@/components/common/icons/githubIcon";
import JSONModal from "@/components/JSONModal";
import useRegisterPage from "./hook";

const { Text } = Typography;

export const globalIconStyles = css({
  minWidth: "100vw",
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "16px",
  paddingRight: "23px",
});

const RegisterPage = () => {
  const {
    handleCreateForm,
    handleUploadJSON,
    currentYear,
    isModalVisible,
    showModal,
    hideModal,
  } = useRegisterPage();

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
        <Button
          onClick={handleCreateForm}
          css={{ width: "172.27px" }}
          type="primary"
          size="large"
        >
          {" "}
          Create Form{" "}
        </Button>
        <Button
          css={{ width: "172px" }}
          type="link"
          size="large"
          onClick={showModal}
        >
          Load JSON Schema
        </Button>
        <JSONModal
          isModalOpen={isModalVisible}
          onCloseModal={hideModal}
          onUploadJSON={handleUploadJSON}
        />
      </Space>
      <Space align="center" direction="vertical" css={{ paddingTop: "300px" }}>
        <Space size="large">
          <Text type="secondary">Firebolt</Text>
          <GithubIcon />
          <Text type="secondary">iq tech</Text>
        </Space>
        <p css={{ color: "rgba(0, 0, 0, 0.25)" }}>
          Copyright ©{currentYear} Produced by iq tech team
        </p>
      </Space>
    </Space>
  );
};

export default RegisterPage;
