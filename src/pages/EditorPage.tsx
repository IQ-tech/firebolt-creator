import React from "react"

import StepModal from '../components/StepModal'
import AddPropsModal from '../components/AddPropsModal'
import ValidatorsModal from '../components/ValidatorsModal'

const EditorPage = () => {
  return (
    <>
      <StepModal />
      <AddPropsModal />
      <ValidatorsModal />
    </>
  )
}

export default EditorPage