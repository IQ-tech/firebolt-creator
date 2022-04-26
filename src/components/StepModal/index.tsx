import { Modal, Button, Input, Select, Menu } from 'antd'
import { PlusOutlined } from "@ant-design/icons"

import useStepModal from './hook'

import * as S from "./styles"

function ModalEditStep() {
  const { Option } = Select
  const { 
    isModalVisible,
    step, 
    
    showModal,
    
    addNewStep,
    handleCancel,
    handleStepData
  } = useStepModal()

  return (
    <>
      <Menu.Item css={S.addLinkStyles} key="add" icon={<PlusOutlined />} onClick={showModal}>
        Add
      </Menu.Item>

      <Modal title="Create/Edit Step" visible={isModalVisible} onOk={addNewStep} onCancel={handleCancel}>
        <div className="flex">
          <div className="label__input">
            <label>Slug</label>
            <Input 
              placeholder="Basic info" 
              value={step.step.slug} 
              onChange={(e) => handleStepData("slug", e.currentTarget.value)}
            />
          </div>

          <div className="label__input">
            <label>Friendly Name</label>
            <Input 
              placeholder="Tell me some basic info" 
              value={step.step.friendlyname}
              onChange={(e) => handleStepData("friendlyname", e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="column label__select">
          <label>Type</label>
          <Select style={{ width: '100%' }} value={step.step.type} onSelect={(value: string) => handleStepData("type", value)}>
            <Option value="form">Form</Option>
            <Option value="custom">Custom</Option>
          </Select>
        </div>
      </Modal>
    </>
  )
}

export default ModalEditStep