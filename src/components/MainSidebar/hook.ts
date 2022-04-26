import { useState, useEffect } from 'react'

import { useFireboltJSON } from "@/hooks/useFireboltJSON"

export default function useMainSidebar() {
  const { currentJSON } = useFireboltJSON()

  const [steps, setSteps] = useState(() => stepsFriendlyName())

  useEffect(() => {
    setSteps(() => stepsFriendlyName())

  }, [currentJSON])

  function stepsFriendlyName() {
    let allSteps: string[] = []
    const jsonSteps = currentJSON.steps

    jsonSteps.map(step => {
      allSteps.push(step.step.friendlyname)
    })

    return allSteps;
  }

  return {
    steps,
    
  }

}