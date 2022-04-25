import { useState } from 'react';

import { useFireboltJSON } from "@/hooks/useFireboltJSON";

export default function useMainSidebar() {
  const { currentJSON } = useFireboltJSON();

  const [steps, setSteps] = useState(() => {
    let allSteps: string[] = [];
    const jsonSteps = currentJSON.steps

    jsonSteps.map(step => {
      allSteps.push(step.step.friendlyname);
    })

    return allSteps;
  })

  function addNewStep() {
    console.log("new step")
  }

  return {
    steps,

    addNewStep
  }

}