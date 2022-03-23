import useStepModal from './hook'

import 'antd/dist/antd.css'

import { Modal, Button, Input, Select } from 'antd'

function ModalEditStep() {
  const { Option } = Select;
  const { 
    isModalVisible,
    step, 
    
    showModal,
    handleOk,
    handleCancel,
    handleStepData
  } = useStepModal()

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit or Create a Step
      </Button>

      <Modal title="Create/Edit Step" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="flex">
          <div className="label__input">
            <label>Slug</label>
            <Input 
              placeholder="Basic info" 
              value={step.slug} 
              onChange={(e) => handleStepData("slug", e.currentTarget.value)}
            />
          </div>

          <div className="label__input">
            <label>Friendly Name</label>
            <Input 
              placeholder="Tell me some basic info" 
              value={step.friendlyName}
              onChange={(e) => handleStepData("friendlyName", e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="column label__select">
          <label>Type</label>
          <Select style={{ width: '100%' }} value={step.type} onSelect={(value: string) => handleStepData("type", value)}>
            <Option value="form">Form</Option>
            <Option value="custom">Custom</Option>
          </Select>
        </div>
      </Modal>
    </>
  )
}

export default ModalEditStep