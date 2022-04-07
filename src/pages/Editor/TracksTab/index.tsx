import { Layout, Menu, Divider } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import Flow from "./components/Flow";

const { SubMenu } = Menu;

const Sidebar = () => (
  <div css={S.contentSidebarStyles}>
    <h2 css={S.sidebarTitleStyles}>Tracks list</h2>
    <Divider css={S.dividerStyles} />
    <Menu
      css={S.menuContentStyles}
      mode="vertical"
      expandIcon={<EllipsisOutlined />}
    >
      <SubMenu
        key="Default"
        icon={<FormOutlined />}
        title="Default"
        onTitleClick={() => alert("Default")}
      />
      <SubMenu
        key="Alternative"
        icon={<FormOutlined />}
        title="Alternative"
        onTitleClick={() => alert("Alternative")}
      />
      <Menu.Item
        css={S.addLinkStyles}
        key="add"
        icon={<PlusOutlined />}
        onClick={() => alert("Add")}
      >
        {" "}
        Add
      </Menu.Item>
    </Menu>
  </div>
);

const TracksTab = () => {
  return (
    <Layout css={S.contentStyles}>
      <Sidebar />
      <Flow />
    </Layout>
  );
};

export default TracksTab;
