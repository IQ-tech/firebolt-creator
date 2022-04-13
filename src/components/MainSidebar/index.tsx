import { Menu, Divider } from "antd";
import { FormOutlined, PlusOutlined } from "@ant-design/icons";
import * as S from "./styles";

const { SubMenu } = Menu;

const StepFields = () => (
  <div css={S.contentSidebarStyles}>
    <p css={S.sidebarTitleStyles}>Steps</p>
    <Divider css={S.dividerStyles} />
    <Menu css={S.menuContentStyles} mode="vertical">
      <SubMenu key="basic-infos" icon={<FormOutlined />} title="Basic info">
        <Menu.Item key="sub1-rename">Rename</Menu.Item>
        <Menu.Item key="sub1-remove">Remove</Menu.Item>
        <Menu.Item key="sub1-edit">Edit</Menu.Item>
      </SubMenu>
      <SubMenu key="extra-infos" icon={<FormOutlined />} title="Extra infos">
        <Menu.Item key="sub2-rename">Rename</Menu.Item>
        <Menu.Item key="sub2-remove">Remove</Menu.Item>
        <Menu.Item key="sub2-edit">Edit</Menu.Item>
      </SubMenu>
      <SubMenu key="adress" icon={<FormOutlined />} title="Adress">
        <Menu.Item key="sub3-rename">Rename</Menu.Item>
        <Menu.Item key="sub3-remove">Remove</Menu.Item>
        <Menu.Item key="sub3-edit">Edit</Menu.Item>
      </SubMenu>
      <Menu.Item css={S.addLinkStyles} key="add" icon={<PlusOutlined />}>
        Add
      </Menu.Item>
    </Menu>
  </div>
);

export default StepFields