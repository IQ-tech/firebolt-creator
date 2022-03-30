import useJSONModal from './hook'

import 'antd/dist/antd.css'

import { Button } from 'antd'

import ModalContent from './components/ModalContent'

function JSONModal() {
  const modalProps = useJSONModal()
  const { showModal } = modalProps

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Load JSON Schema
      </Button>

      <ModalContent {...modalProps} />
    </>
  )
}

export default JSONModal