import { Modal, Button, Input, Select, Menu } from 'antd'
import { PlusOutlined } from "@ant-design/icons"

import useEditStepModal from './hook'

import * as S from "./styles"

function EditStepModal({ key, stepToEdit, slug }) {
  const { Option } = Select
  const { 
    isModalVisible,
    step, 

    showModal,
    
    handleEditStepData,
    handleConfirmEdition,
    handleCancel,
  } = useEditStepModal({ stepToEdit, slug })

  return (
    <>
      <Menu.Item key={key} onClick={showModal}>
        Edit
      </Menu.Item>

      <Modal title="Create/Edit Step" visible={isModalVisible} onOk={handleConfirmEdition} onCancel={handleCancel}>
        <div className="flex">
          <div className="label__input">
            <label>Slug</label>
            <Input 
              placeholder="Basic info" 
              value={step.step.slug} 
              onChange={(e) => handleEditStepData("slug", e.currentTarget.value)}
            />
          </div>

          <div className="label__input">
            <label>Friendly Name</label>
            <Input 
              placeholder="Tell me some basic info" 
              value={step.step.friendlyname}
              onChange={(e) => handleEditStepData("friendlyname", e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="column label__select">
          <label>Type</label>
          <Select style={{ width: '100%' }} value={step.step.type} onSelect={(value: string) => handleEditStepData("type", value)}>
            <Option value="form">Form</Option>
            <Option value="custom">Custom</Option>
          </Select>
        </div>
      </Modal>
    </>
  )
}

export default EditStepModal