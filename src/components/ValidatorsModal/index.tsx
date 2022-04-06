import useStepModal from './hook'
import FormValidators from './components/Form'

import { Modal, Button } from 'antd'

function ValidatorsModal() {
  const { 
    isModalVisible,
    
    showModal,
    handleOk,
    handleCancel
  } = useStepModal()

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add validators
      </Button>

      <Modal title="Create/Edit Step" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <FormValidators />
      </Modal>
    </>
  )
}

export default ValidatorsModal