import FireboltLogo from "../../../common/icons/fireboltLogo"
import { Layout, Avatar } from "antd"
import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons"
import * as S from './styles'

const { Header } = Layout;

const HeaderInternal = () => {
  return (
    <Header css={S.headerContent}>
      <div css={S.logoStyles}>
        <FireboltLogo />
        Firebolt creator
      </div>

      <div css={S.docsLinkContent}>
        <a
        css={S.docsLink}
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
  )
}

export default HeaderInternal
