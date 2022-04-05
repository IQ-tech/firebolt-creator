import { Layout, Menu, Card, Divider } from "antd";
import { FormOutlined, PlusOutlined, EllipsisOutlined} from "@ant-design/icons";
import * as S from "./styles";

const { SubMenu } = Menu;

const Sidebar = () => (
  <div css={S.contentSidebarStyles}>
    <p css={S.sidebarTitleStyles}>Tracks list</p>
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
      <Menu.Item css={S.addLinkStyles} key="add" icon={<PlusOutlined />} onClick={() => alert("Add")}> Add</Menu.Item>
    </Menu>
  </div>
);

const MainContent = () => (
  <Card title="Default track" css={{ width: "100%" }}>
    <div>Map</div>

    <div>List Maps</div>
  </Card>
);

const TracksPage = () => {
  return (
    <Layout css={S.contentStyles}>
      <Sidebar />
      <MainContent />
    </Layout>
  );
};

export default TracksPage;
