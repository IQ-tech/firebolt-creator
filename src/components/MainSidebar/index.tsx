import { Menu, Divider } from "antd"
import { FormOutlined, PlusOutlined } from "@ant-design/icons"

import useMainSidebar from "./hook"

import StepModal from '../StepModal'
import EditStepModal from "../EditStepModal"

import * as S from "./styles"

const { SubMenu } = Menu

const StepFields = ({ setVisibleStep }) => {

  const {
    steps,

    handleVisibleStep,
    handleDeleteStep
  } = useMainSidebar({ setVisibleStep })

  return (
    <div css={S.contentSidebarStyles}>
      <p css={S.sidebarTitleStyles}>Steps</p>
      <Divider css={S.dividerStyles} />
      <Menu css={S.menuContentStyles} mode="vertical">

        {steps.map(step => (
          <SubMenu key={step.step.friendlyname} icon={<FormOutlined />} title={step.step.friendlyname} onTitleClick={() => handleVisibleStep(step.step.slug)}>
            <Menu.Item key={`${step.step.slug}-remove`} onClick={() => handleDeleteStep(step.step.slug)}>Remove</Menu.Item>
            <EditStepModal key={`${step.step.slug}-edit`} stepToEdit={step} slug={step.step.slug} />
          </SubMenu>
        ))}

        <StepModal />
      </Menu>
    </div>
  )
};

export default StepFields