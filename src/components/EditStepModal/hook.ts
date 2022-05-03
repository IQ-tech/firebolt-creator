import { useState } from 'react'

import { useFireboltJSON } from "@/hooks/useFireboltJSON"

import { IStep } from '@/types/fireboltJSON'

export default function useEditStepModal({ stepToEdit, slug }) {
  const { currentJSON, dispatch } = useFireboltJSON()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [step, setStep] = useState<IStep>(stepToEdit)

  function showModal() {
    setIsModalVisible(true)
  };

  function handleCancel() {
    setIsModalVisible(false)
  };

  function handleConfirmEdition() {
    const edittedStep = {
      "step": {
				"slug": step.step.slug,
				"type": step.step.type,
				"friendlyname": step.step.friendlyname,
				"fields": []
			},
      slug: slug
    }

    dispatch({ type: 'EDIT_STEP', payload: edittedStep });

    setIsModalVisible(false)
  }

  function handleEditStepData(name: string, value: string) {    
    setStep((prevState) => {
      return {
        ...prevState,
        step: {
          ...prevState.step,
          [name]: value
        }
      }
    })
  }

  return {
    isModalVisible,
    step, 
    
    showModal,
    handleEditStepData,
    handleConfirmEdition,
    handleCancel,
  }

}