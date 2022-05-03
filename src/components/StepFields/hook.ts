import { useState, useEffect } from 'react'

import { IField } from '@/types/fireboltJSON'

import { useFireboltJSON } from "@/hooks/useFireboltJSON"

export default function useStepFields({ visibleStep }) {
  const { currentJSON, dispatch } = useFireboltJSON()

  const [stepFields, setStepFields] = useState<IField[]>(stepGenerateFields)

  useEffect(() => {
    setStepFields(stepGenerateFields())

  }, [currentJSON, visibleStep])

  function stepGenerateFields() {
    const stepFieldsArray = visibleStep.step.fields

    return stepFieldsArray
  }

  function handleAddField(step: string) {
    
    // const fieldToDelete = { step: step, field: {} }

    // dispatch({ type: 'ADDFIELD', payload: fieldToDelete });
  }

  function handleDeleteField(step: string, field: string) {
    console.log(step)
    const fieldToDelete = { step: step, field: field }

    dispatch({ type: 'DELETE_FIELD', payload: fieldToDelete });
  }

  return {
    stepFields,

    handleAddField,
    handleDeleteField
  }

}