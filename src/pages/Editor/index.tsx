import { Outlet } from "react-router-dom";
import { PageHeader, Button, Tabs, Dropdown, Menu, Tooltip, Modal } from "antd";
import {
  HomeOutlined,
  SisternodeOutlined,
  FileOutlined,
  DownloadOutlined,
  MoreOutlined,
  UndoOutlined,
  RedoOutlined,
  LogoutOutlined,
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
  const {
    location,
    navigate,
    tabsCallback,
    currentJSON,
    dispatch,
    showConfirm,
  } = useEditor();

  return (
    <div
      css={{
        display: "flex",
        minHeight: "calc(100vh - 48px)",
        padding: "28px",
        alignItems: "stretch",
      }}
    >
      <div
        css={{
          display: "flex",
          maxWidth: "1600px",
          width: "100%",
          margin: "0 auto",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <BreadcrumbComponent />
        <PageHeader
          css={{ padding: "16px 24px 0", marginBottom: "27px" }}
          ghost={false}
          onBack={() => navigate("/")}
          title={
            <Tooltip title="Rename">
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
                {currentJSON?.name ? currentJSON?.name : "Untitled"}
              </p>
            </Tooltip>
          }
          subTitle={
            <Tooltip title="Change description">
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
                {currentJSON?.business ? currentJSON?.business : "Untitled"}
              </p>
            </Tooltip>
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
                  <Menu.Item disabled icon={<UndoOutlined />} key="undo-button">
                    Undo
                  </Menu.Item>
                  <Menu.Item disabled icon={<RedoOutlined />} key="redo-button">
                    Redo
                  </Menu.Item>
                  <Menu.Item
                    onClick={showConfirm}
                    icon={<LogoutOutlined />}
                    key="logout-button"
                  >
                    Start new experience
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
