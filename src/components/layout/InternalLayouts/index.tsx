import { Route, Outlet, Link, useNavigate, Navigate } from "react-router-dom";
import useApp from "../../App.hook";
import HeaderInternal from "../InternalHeader"
import MainMenu from "../MainMenu";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb,PageHeader, Button, Tabs, Dropdown } from 'antd';
import { UserOutlined, HomeOutlined, SisternodeOutlined, FileOutlined, EllipsisOutlined } from '@ant-design/icons';
import * as S from './styles'


const { Content } = Layout;
const { TabPane } = Tabs;

const tabsMenu = (
  <Menu>
    <Menu.Item key="1" icon={<UserOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        2st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        3st menu item
      </a>
    </Menu.Item>
  </Menu>
)

const BreadcrumbComponent = () => (
  <div css={S.breadcrumbContent}>
    <Breadcrumb css={S.breadcrumbStyles}>
      <Breadcrumb.Item>Experiences</Breadcrumb.Item>
      <Breadcrumb.Item>My Form</Breadcrumb.Item>
    </Breadcrumb>
  </div>
)

const ButtonsHeader = [
  <Button key="1" type="primary">
    Primary
  </Button>,
  <Dropdown key="more" overlay={tabsMenu} placement="bottomRight">
    <Button css={S.moreButton} type="text" icon={<EllipsisOutlined />} />
  </Dropdown>
]

const InternalLayouts = () => {
  const { isMenuOpen, toggleMenu } = useApp();
  const navigate = useNavigate()

function validActiveKey () {
  const URL_CURRENT = window.location.href;

  if(URL_CURRENT.includes("editor")) return "1";
  if(URL_CURRENT.includes("tracks")) return "2";
  if(URL_CURRENT.includes("jschema")) return "3";

  return "1"
}

  function tabsCallback(key: string) {
    let tabPath

    if(key === '1') {
      tabPath = 'editor'
    }
    if(key === '2') {
      tabPath = 'tracks'
    }
    if(key === '3') {
      tabPath = 'jschema'
    }
    
    navigate(`/app/${tabPath}`)
  }

  return (
    <Layout>
      <HeaderInternal isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {/* <MainMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />     */}
      <Layout className="layout" css={S.layoutStyles}>
        <Content css={S.contentStyles}>
          <BreadcrumbComponent />
          <PageHeader
            css={S.pageHeaderStyles}
            ghost={false}
            onBack={() => navigate('/')}
            title="My Form"
            subTitle="Form description"
            extra={ButtonsHeader}
          >
          <Tabs defaultActiveKey={validActiveKey()} onTabClick={tabsCallback} onChange={() => console.log('s')} >
            <TabPane
              tab={
                <span><HomeOutlined />Main</span>
              }
              key="1">
            </TabPane>
            <TabPane 
              tab={
                <span><SisternodeOutlined />Tracks</span>
              } 
              key="2">
            </TabPane>
            <TabPane 
              tab={
                <span><FileOutlined />JSON schema</span>
              } 
              key="3">
            </TabPane>
          </Tabs>
          </PageHeader>
        </Content>
      </Layout>
      <Outlet />
    </Layout>
  );
};

export default InternalLayouts;