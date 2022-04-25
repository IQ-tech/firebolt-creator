import { Menu, Divider } from "antd";
import { FormOutlined, PlusOutlined } from "@ant-design/icons";

import useMainSidebar from "./hook";

import * as S from "./styles";

const { SubMenu } = Menu;

const StepFields = () => {
  

  const {
    steps,

    addNewStep

  } = useMainSidebar()

  return (
    <div css={S.contentSidebarStyles}>
      <p css={S.sidebarTitleStyles}>Steps</p>
      <Divider css={S.dividerStyles} />
      <Menu css={S.menuContentStyles} mode="vertical">

        {steps.map(step => (
          <SubMenu key={step} icon={<FormOutlined />} title={step}>
            <Menu.Item key="sub1-rename">Rename</Menu.Item>
            <Menu.Item key="sub1-remove">Remove</Menu.Item>
            <Menu.Item key="sub1-edit">Edit</Menu.Item>
          </SubMenu>
        ))}

        <Menu.Item css={S.addLinkStyles} key="add" icon={<PlusOutlined />} onClick={addNewStep}>
          Add
        </Menu.Item>
      </Menu>
    </div>
  )
};

export default StepFields