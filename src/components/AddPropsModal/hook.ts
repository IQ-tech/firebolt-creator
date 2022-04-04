import { useState } from 'react'
interface IFieldProps {
  propName: string;
  value: string;
}

export default function useAddPropsModal() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [fieldProps, setFieldProps] = useState<IFieldProps[]>([
    {
      propName: "",
      value: ""
    }  
  ])

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

    currentFields.push({
      propName: "",
      value: "",
    })

    setFieldProps(currentFields)
  }

  function deleteProp(index: number) {
    const currentFields = [...fieldProps]

    console.log(index)
    console.log(currentFields[index])

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