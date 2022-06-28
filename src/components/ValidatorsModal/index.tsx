import useStepModal from './hook'
import FormValidators from './components/Form'

import { Modal, Button } from 'antd'

function ValidatorsModal({ field, stepSlug }) {
//console.log("🚀 ~ file: index.tsx ~ line 7 ~ ValidatorsModal ~ visibleStep", stepSlug)
//console.log("🚀 ~ file: index.tsx ~ line 7 ~ ValidatorsModal ~ field", field)
  
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

      <Modal title={`Create/Edit Validator ${field.slug}`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <FormValidators field={field} stepSlug={stepSlug}/>
      </Modal>
    </>
  )
}

export default ValidatorsModal