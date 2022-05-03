import { useState, useEffect } from 'react'

import { useFireboltJSON } from "@/hooks/useFireboltJSON"

export default function useMainSidebar({ setVisibleStep }) {
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

  function handleVisibleStep(slug: string) {
    const selectedStep = currentJSON.steps.find(step => step.step.slug === slug)

    setVisibleStep(selectedStep)
  }

  return {
    steps,
    
    handleVisibleStep,
    handleDeleteStep
  }

}