import { Menu, Divider } from "antd"
import { FormOutlined, PlusOutlined } from "@ant-design/icons"

import useMainSidebar from "./hook"

import StepModal from '../StepModal'

import * as S from "./styles"
import { useEffect } from "react"

const { SubMenu } = Menu

const StepFields = () => {

  const {
    steps,

  } = useMainSidebar()

  console.log(steps)

  return (
    <div css={S.contentSidebarStyles}>
      <p css={S.sidebarTitleStyles}>Steps</p>
      <Divider css={S.dividerStyles} />
      <Menu css={S.menuContentStyles} mode="vertical">

        {steps.map(step => (
          <SubMenu key={step} icon={<FormOutlined />} title={step}>
            <Menu.Item key={`${step}-rename`}>Rename</Menu.Item>
            <Menu.Item key={`${step}-remove`}>Remove</Menu.Item>
            <Menu.Item key={`${step}-edit`}>Edit</Menu.Item>
          </SubMenu>
        ))}

        <StepModal />
      </Menu>
    </div>
  )
};

export default StepFields