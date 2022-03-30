import { useState } from 'react';
import AJV from 'ajv';

import { JSONSchema } from "./schema"

interface IHandleEditor { 
  error: object;
  json: object;
  plainText: string;
}

export default function useJSONModal() {
  const [ json, setJson ] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [disableButton, setDisableButton] = useState(true)

  function showModal() {
    setIsModalVisible(true);
  };

  function handleOk() {
    setIsModalVisible(false);
  };

  function handleCancel() {
    setIsModalVisible(false);
    setJson([])
    setDisableButton(true)
  };

  const handleUpload = (event: object) => {
    const [ file ] : [ object ] = event?.fileList
    const reader = new FileReader();
    
    reader.readAsText(file?.originFileObj);
    setJson(event?.fileList)
    
    setTimeout(() => {
      if (reader.result) {
        validateJSON(reader.result)
      }
    }, 10)
  }
 

  const handleEditor = ({ error, json, plainText } : IHandleEditor) => {
    const jsonValue = json ? json : plainText
    setJson(jsonValue)

    if (!error && json)
      validateJSON(json)
  }
  
  const validateJSON = (json : string|object) => {
    const jsonValidator = new AJV()
    const validate = jsonValidator.compile(JSONSchema)

    const uploadedJSON = typeof json === "string" ?  JSON.parse(json) : json
    const isValid = validate(uploadedJSON)
    
    console.log('isValid', isValid)

    setDisableButton(!isValid)

    if (!isValid) {
      validate?.errors.map((error:object) => console.log('ops, ', `${error.instancePath} ${error.message}`))
    }
  }

  function handleTabChange(): void {
    setJson([])
  }

  return {
    json,
    isModalVisible,
    disableButton,
    showModal,
    handleOk,
    handleCancel,
    handleUpload,
    handleEditor,
    handleTabChange
  }

}