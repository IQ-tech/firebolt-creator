import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BreadcrumbComponent from "@/components/Breadcrumb";
import { tabsMenu } from "@/components/TabsMenu";
import {
  Layout,
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
} from "@ant-design/icons";
import * as S from "./styles";

const { TabPane } = Tabs;


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
      </Layout>
      <Outlet />
    </>
  );
};

export default EditorPage;
