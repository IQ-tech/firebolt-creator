{/* @ts-ignore */}
import AJV from 'ajv';
import { useState } from 'react';


import { JSONSchema } from "./schema"

interface IHandleEditor { 
  error: object;
  json: object;
  plainText: string;
}

export default function useJSONModal() {
  const [ json, setJson ] = useState({})
  const [ jsonError, setJsonError ] = useState('')
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
    {/* @ts-ignore */}
    const [ file ] : [ object ] = event?.fileList
    const reader = new FileReader();
    
    {/* @ts-ignore */}
    reader.readAsText(file?.originFileObj);

    {/* @ts-ignore */}
    setJson(event?.fileList)
    setJsonError('')
    
    setTimeout(() => {
      if (reader.result) {
        validateJSON(reader.result)
      }
    }, 10)
  }
 

  const handleEditor = ({ error, json, plainText } : IHandleEditor) => {
    const jsonValue = json ? json : plainText
    
    setJson(jsonValue)
    setJsonError('')

    if (!error && json)
      validateJSON(json)
  }
  
  const validateJSON = (json : string|object) => {
    const jsonValidator = new AJV()
    const validate = jsonValidator.compile(JSONSchema)

    const uploadedJSON = typeof json === "string" ?  JSON.parse(json) : json
    const isValid = validate(uploadedJSON)
    
    setDisableButton(!isValid)

    if (!isValid) {
      validate?.errors.map((error:object) => {
        {/* @ts-ignore */}
        setJsonError(`${error.instancePath} ${error.message}`)
      })
    }
  }

  function handleTabChange(): void {
    setJson([])
    setJsonError('')
  }

  return {
    json,
    jsonError,
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