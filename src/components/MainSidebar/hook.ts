import { useState, useEffect } from 'react'

import { useFireboltJSON } from "@/hooks/useFireboltJSON"

export default function useMainSidebar() {
  const { currentJSON, dispatch } = useFireboltJSON()

  const [steps, setSteps] = useState(stepsFriendlyName)

  useEffect(() => {
    setSteps(() => stepsFriendlyName())

  }, [currentJSON])

  function stepsFriendlyName() {
    const jsonSteps = currentJSON.steps

    return jsonSteps
  }

  function handleDeleteStep(slug: string) {
    dispatch({ type: 'DELETESTEP', payload: slug });
  }

  return {
    steps,
    
    handleDeleteStep
  }

}