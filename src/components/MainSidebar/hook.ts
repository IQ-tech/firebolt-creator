import { useState, useEffect } from 'react'

import { useFireboltJSON } from "@/hooks/useFireboltJSON"

export default function useMainSidebar() {
  const { currentJSON } = useFireboltJSON()

  const [steps, setSteps] = useState(() => stepsFriendlyName())

  useEffect(() => {
    setSteps(() => stepsFriendlyName())

  }, [currentJSON])

  function stepsFriendlyName() {
    const jsonSteps = currentJSON.steps

    return jsonSteps
  }

  return {
    steps,
    
  }

}