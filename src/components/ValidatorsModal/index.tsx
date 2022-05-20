import useStepModal from './hook'
import FormValidators from './components/Form'

import { Modal, Button } from 'antd'

function ValidatorsModal({ field }) {
  const { 
    isModalVisible,
    
    showModal,
    handleOk,
    handleCancel
  } = useStepModal({ field })

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Config validators
      </Button>

      <Modal title="Create/Edit Step" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <FormValidators />
      </Modal>
    </>
  )
}

export default ValidatorsModal