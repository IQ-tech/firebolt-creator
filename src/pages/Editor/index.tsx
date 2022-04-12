// Todo - separar em arquivos menores p/ components
import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Layout,
  Menu,
  Breadcrumb,
  PageHeader,
  Button,
  Tabs,
  Dropdown,
} from "antd";
import {
  HomeOutlined,
  SisternodeOutlined,
  FileOutlined,
  EllipsisOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import * as S from "./styles";

const { Content } = Layout;
const { TabPane } = Tabs;

const tabsMenu = (
  <Menu>
    <Menu.Item key="1" icon={<DownloadOutlined />}>
      <a
        // target="_blank"
        rel="noopener noreferrer"
        href="/"
      >
        Export form JSON
      </a>
    </Menu.Item>
  </Menu>
);

const BreadcrumbComponent = () => (
  <div css={S.breadcrumbContent}>
    <Breadcrumb css={S.breadcrumbStyles}>
      <Breadcrumb.Item>Experiences</Breadcrumb.Item>
      <Breadcrumb.Item>My Form</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);


const tabs = [
  { path: "/app/editor/main", label: "Main", Icon: HomeOutlined },
  { path: "/app/editor/tracks", label: "Tracks", Icon: SisternodeOutlined },
  { path: "/app/editor/jschema", label: "JSON schema", Icon: FileOutlined },
];

const EditorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabsCallback = (path: string) => navigate(path);

  return (
    <>
      <Layout className="layout" css={S.layoutStyles}>
        <Content css={S.contentStyles}>
          <BreadcrumbComponent />
          <PageHeader
            css={S.pageHeaderStyles}
            ghost={false}
            onBack={() => navigate("/")}
            title="My Form"
            subTitle="Form description"
            extra={
              <>
                <Button key="1" type="primary">
                  Primary
                </Button>
                <Dropdown key="more" overlay={tabsMenu} placement="bottomRight">
                  <Button
                    css={S.moreButton}
                    type="text"
                    icon={<EllipsisOutlined />}
                  />
                </Dropdown>
              </>
            }
          >
            <Tabs activeKey={location.pathname} onTabClick={tabsCallback}>
              {tabs.map(({ path, Icon, label }) => (
                <TabPane
                  tab={
                    <span>
                      <Icon />
                      {label}
                    </span>
                  }
                  key={path}
                ></TabPane>
              ))}
            </Tabs>
          </PageHeader>
        </Content>
      </Layout>
      <Outlet />
    </>
  );
};

export default EditorPage;
