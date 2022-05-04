import { useState, useEffect } from 'react'
interface IFieldProps {
  propName: string;
  value: string;
}

export default function useAddPropsModal({ field }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const defaultField = {
    propName: "",
    value: "",
  }

  const [fieldProps, setFieldProps] = useState<IFieldProps[]>(() => {
    const propsArray: any[] = [];

    for (const [key, value] of Object.entries(field)) {
      propsArray.push({propName: key, value: value})
    }

    return propsArray
  })

  const columns = [
    {
      title: 'Prop Name',
      dataIndex: 'propName',
      key: 'propName',
      width: 200
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      width: 200
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: 72
    }
  ]

  function showModal() {
    setIsModalVisible(true);
  };

  function handleOk() {
    setIsModalVisible(false);
  };

  function handleCancel() {
    setIsModalVisible(false);
  };

  function handlePropsData(index: number, name: string, value: string) {
    const currentFields = [...fieldProps]

    currentFields[index][name as keyof IFieldProps] = value

    setFieldProps(currentFields)
  }

  function addNewProp() {
    const currentFields = [...fieldProps]

    currentFields.push(defaultField)

    setFieldProps(currentFields)
  }

  function deleteProp(index: number) {
    const currentFields = [...fieldProps]

    currentFields.splice(index, 1)

    setFieldProps(currentFields)
  }

  return {
    isModalVisible,
    fieldProps, 
    columns,

    showModal,
    handleOk,
    handleCancel,
    handlePropsData,
    addNewProp,
    deleteProp
  }

}