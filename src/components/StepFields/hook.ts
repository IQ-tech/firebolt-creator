import { useState, useEffect } from 'react'

import { IField } from '@/types/fireboltJSON'

import { useFireboltJSON } from "@/hooks/useFireboltJSON"

export default function useStepFields() {
  const { currentJSON, dispatch } = useFireboltJSON()

  const [stepFields, setStepFields] = useState<IField[]>(stepGenerateFields)

  useEffect(() => {
    setStepFields(stepGenerateFields())

  }, [currentJSON])

  function stepGenerateFields() {
    const stepFieldsArray = currentJSON.steps[0].step.fields

    return stepFieldsArray
  }

  function handleDeleteField(step: string, field: string) {
    console.log(step)
    const fieldToDelete = { step: step, field: field }

    dispatch({ type: 'DELETEFIELD', payload: fieldToDelete });
  }

  return {
    stepFields,

    handleDeleteField
  }

}