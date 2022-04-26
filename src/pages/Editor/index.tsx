import { Outlet } from "react-router-dom";
import BreadcrumbComponent from "@/components/Breadcrumb";
import { Layout, PageHeader, Button, Tabs } from "antd";
import {
  HomeOutlined,
  SisternodeOutlined,
  FileOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import downloadJSONFile from "@/helpers/downloadJSON";

import useEditor from "./hook";
import mockJSON from "./mockJson";

const { TabPane } = Tabs;
const { Content } = Layout;

const tabs = [
  { path: "/app/editor/main", label: "Main", Icon: HomeOutlined },
  { path: "/app/editor/flows", label: "Flows", Icon: SisternodeOutlined },
  { path: "/app/editor/jschema", label: "JSON schema", Icon: FileOutlined },
];

const EditorPage = () => {
  const { location, navigate, tabsCallback } = useEditor();

  return (
    <Layout className="layout" css={{ padding: "28px" }}>
      <Content>
        <BreadcrumbComponent />
        <PageHeader
          css={{ padding: "16px 24px 0", marginBottom: "27px" }}
          ghost={false}
          onBack={() => navigate("/")}
          title="My Form"
          subTitle="Form description"
          extra={
            <Button
              key="1"
              type="primary"
              onClick={() => downloadJSONFile(mockJSON, "banco-pan")}
            >
              <DownloadOutlined /> Export form JSON
            </Button>
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
              />
            ))}
          </Tabs>
        </PageHeader>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default EditorPage;
