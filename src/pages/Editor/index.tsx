import { Outlet } from "react-router-dom";
import { PageHeader, Button, Tabs, Dropdown, Menu } from "antd";
import {
  HomeOutlined,
  SisternodeOutlined,
  FileOutlined,
  DownloadOutlined,
  MoreOutlined,
  UndoOutlined,
  RedoOutlined,
} from "@ant-design/icons";

import BreadcrumbComponent from "@/components/Breadcrumb";
import downloadJSONFile from "@/helpers/downloadJSON";

import useEditor from "./hook";

const { TabPane } = Tabs;

const tabs = [
  { path: "/app/editor/main", label: "Main", Icon: HomeOutlined },
  { path: "/app/editor/flows", label: "Flows", Icon: SisternodeOutlined },
  { path: "/app/editor/jschema", label: "JSON schema", Icon: FileOutlined },
];

const EditorPage = () => {
  const { location, navigate, tabsCallback, currentJSON, dispatch } =
    useEditor();

  return (
    <div css={{ padding: "28px" }}>
      <div css={{ maxWidth: "1600px", width: "100%", margin: "0 auto" }}>
        <BreadcrumbComponent />
        <PageHeader
          css={{ padding: "16px 24px 0", marginBottom: "27px" }}
          ghost={false}
          onBack={() => navigate("/")}
          title={
            <p
              css={{
                padding: "4px 8px",
                border: "1px solid transparent",
                ":hover": { border: "solid 1px #1890ff" },
              }}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                dispatch({
                  type: "SET_EXPERIENCE_NAME",
                  payload: { experienceName: e?.target?.innerText },
                });
              }}
            >
              {currentJSON?.name}
            </p>
          }
          subTitle={
            <p
              css={{
                padding: "4px 8px",
                border: "1px solid transparent",
                ":hover": { border: "solid 1px #1890ff" },
              }}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                dispatch({
                  type: "SET_EXPERIENCE_DESCRIPTION",
                  payload: { newDescription: e?.target?.innerText },
                });
              }}
            >
              {currentJSON?.business}
            </p>
          }
          extra={[
            <Button
              key="1"
              type="primary"
              onClick={() => downloadJSONFile(currentJSON, currentJSON?.name)}
            >
              <DownloadOutlined /> Export form JSON
            </Button>,
            <Dropdown
              key="more"
              overlay={
                <Menu>
                  <Menu.Item icon={<UndoOutlined />} key={`undo-button`}>
                    Undo
                  </Menu.Item>
                  <Menu.Item icon={<RedoOutlined />} key={`redo-button`}>
                    Redo
                  </Menu.Item>
                </Menu>
              }
              placement="bottomRight"
            >
              <Button
                type="text"
                icon={<MoreOutlined style={{ fontSize: 20 }} />}
              />
            </Dropdown>,
          ]}
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
      </div>
    </div>
  );
};

export default EditorPage;
