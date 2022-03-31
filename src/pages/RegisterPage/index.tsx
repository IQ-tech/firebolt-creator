import { Link } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import BigFireboltLogo from '@/components/common/icons/bigFireboltLogo';
import GlobalIocn from '@/components/common/icons/globalIcon';
import GithubIcon from '@/components/common/icons/githubIcon';

import * as S from './styles'

const { Text } = Typography;

const RegisterPage = () => {
  return(
    <Space
      align="center"
      direction="vertical"          
      css={S.contentStyles}
    >
      <a  
        css={S.globalIconStyles}
        href="https://iq-tech.github.io/firebolt-docs/en/introduction/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GlobalIocn />
      </a>
      <Space 
        align="center"
        direction="vertical"  
        css={S.bigLogoStyles}
        size="large"
      >
        <BigFireboltLogo />
        <Text type="secondary">Firebolt is a multistep form experiences creator</Text>
      </Space>
      <Space size="large" css={S.contentButtonsStyles}>
        <Link to="/app/editor">
          <Button css={S.buttonsStyles} type="primary" size="large"> Create Form </Button>
        </Link>
        <Link to="/app/editor">
          <Button css={S.buttonsStyles} type="link" size="large">Load JSON Schema</Button>
        </Link>
      </Space>
      <Space align="center" direction="vertical" css={S.footerStyles}>
        <Space size="large">
          <Text type="secondary">Firebolt</Text>
          <GithubIcon />
          <Text type="secondary">iq tech</Text>
        </Space>
        <p css={S.copyrightStyles}>Copyright ©2022 Produced by iq tech team</p>      
      </Space>
    </Space>
  )
}

export default RegisterPage