import { useState } from 'react'

interface IStep {
  slug: string;
  friendlyName: string;
  type: string
}

export default function useStepModal() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [step, setStep] = useState<IStep>({
    slug: "",
    friendlyName: "",
    type: "form"
  })

  function showModal() {
    setIsModalVisible(true);
  };

  function handleOk() {
    setIsModalVisible(false);
  };

  function handleCancel() {
    setIsModalVisible(false);
  };

  function handleStepData(name: string, value: string) {
    setStep((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return {
    isModalVisible,
    step, 
    
    showModal,
    handleOk,
    handleCancel,
    handleStepData
  }

}