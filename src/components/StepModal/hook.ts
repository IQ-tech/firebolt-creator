import { useState } from 'react'

import { useFireboltJSON } from "@/hooks/useFireboltJSON"

import { IStep } from '@/types/fireboltJSON'

export default function useStepModal() {
  const { currentJSON, dispatch } = useFireboltJSON()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [step, setStep] = useState<IStep>({
    step: {
      slug: "",
      friendlyname: "",
      type: "form",
      fields: []
    }
  })

  function showModal() {
    setIsModalVisible(true)
  };

  function handleCancel() {
    setIsModalVisible(false)
  };

  function addNewStep() {
    const newStep = {
      "step": {
				"slug": step.step.slug,
				"type": step.step.type,
				"friendlyname": step.step.friendlyname,
				"fields": []
			}
    }

    dispatch({ type: 'ADD_NEW_STEP', payload: newStep });

    setIsModalVisible(false)
  }

  function handleStepData(name: string, value: string) {
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
    addNewStep,
    handleCancel,
    handleStepData
  }

}