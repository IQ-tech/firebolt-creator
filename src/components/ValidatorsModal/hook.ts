import { useState } from 'react'

export default function useStepModal({ field }) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  function showModal() {
    setIsModalVisible(true);
  };

  function handleOk() {
    setIsModalVisible(false);
  };

  function handleCancel() {
    setIsModalVisible(false);
  };

  return {
    isModalVisible,
    
    showModal,
    handleOk,
    handleCancel
  }

}