import { useState, useEffect } from 'react'
interface IStep {
  slug: string;
  friendlyName: string;
  type: string
}
interface IFieldProps {
  key: number;
  propName: any;
  value: any;
  action: any;
}

export default function useAddPropsModal(InputComponent: any, ButtonComponent: any) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const [fieldProps, setFieldProps] = useState<IFieldProps[]>([
    {
      key: 1,
      propName: InputComponent,
      value: InputComponent,
      action: ButtonComponent
    }  
  ])

  const columns = [
    {
      title: 'Prop Name',
      dataIndex: 'propName',
      key: 'propName',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
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

  function handleStepData(name: string, value: string) {
    // setStep((prevState) => {
    //   return {
    //     ...prevState,
    //     [name]: value
    //   }
    // })
  }

  function deleteProp(key: number) {
    fieldProps.find((field, index) => {
      // if(field.key === key) {
      //   console.log('if')
      //   console.log(index)
      // }
      console.log(fieldProps)
    })
  }

  function getNewKey() {
    const lastKey = fieldProps.length > 0 ? fieldProps[fieldProps.length - 1].key : 0
    const newKey = lastKey + 1

    return newKey
  }

  return {
    isModalVisible,
    fieldProps, 
    columns,

    setFieldProps,
    showModal,
    handleOk,
    handleCancel,
    handleStepData,
    getNewKey,
    deleteProp
  }

}