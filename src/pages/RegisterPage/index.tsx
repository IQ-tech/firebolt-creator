import { Link } from 'react-router-dom';
import { Button, Space, Typography } from 'antd';
import BigFireboltLogo from '@/components/common/icons/bigFireboltLogo';
import GlobalIocn from '@/components/common/icons/globalIcon';
import GithubIcon from '@/components/common/icons/githubIcon';

import { contentStyles } from './styles';
import { globalIconStyles } from './styles';
import { bigLogoStyles } from './styles';
import { contentButtonsStyles } from './styles';
import { buttonsStyles } from './styles';
import { footerStyles } from './styles';
import { copyrightStyles } from './styles';

const { Text } = Typography;

const RegisterPage = () => {
  return(
    <Space
      align="center"
      direction="vertical"          
      css={contentStyles}
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
        css={bigLogoStyles}
        size="large"
      >
        <BigFireboltLogo />
        <Text type="secondary">Firebolt is a multistep form experiences creator</Text>
      </Space>
      <Space size="large" css={contentButtonsStyles}>
        <Link to="/app">
          <Button css={buttonsStyles} type="primary" size="large"> Create Form </Button>
        </Link>
        <Link to="/app">
          <Button css={buttonsStyles} type="link" size="large">Load JSON Schema</Button>
        </Link>
      </Space>
      <Space align="center" direction="vertical" css={footerStyles}>
        <Space size="large">
          <Text type="secondary">Firebolt</Text>
          <GithubIcon />
          <Text type="secondary">iq tech</Text>
        </Space>
        <p css={copyrightStyles}>Copyright ©2022 Produced by iq tech team</p>      
      </Space>
    </Space>
  )
}

export default RegisterPage