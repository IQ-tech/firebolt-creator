import { Menu, Divider } from "antd"
import { FormOutlined, PlusOutlined } from "@ant-design/icons"

import useMainSidebar from "./hook"

import StepModal from '../StepModal'
import EditStepModal from "../EditStepModal"

import * as S from "./styles"
import { useEffect } from "react"

const { SubMenu } = Menu

const StepFields = () => {

  const {
    steps,

  } = useMainSidebar()

  return (
    <div css={S.contentSidebarStyles}>
      <p css={S.sidebarTitleStyles}>Steps</p>
      <Divider css={S.dividerStyles} />
      <Menu css={S.menuContentStyles} mode="vertical">

        {steps.map(step => (
          <SubMenu key={step.step.friendlyname} icon={<FormOutlined />} title={step.step.friendlyname}>
            <Menu.Item key={`${step}-remove`}>Remove</Menu.Item>
            <EditStepModal key={`${step}-edit`} stepToEdit={step} slug={step.step.slug} />
          </SubMenu>
        ))}

        <StepModal />
      </Menu>
    </div>
  )
};

export default StepFields