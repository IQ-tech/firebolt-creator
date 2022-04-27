import { useState } from "react";
import * as M from "@/components/Flow/mocks/mockFlows";

const useSidebarFlow = () => {
  const [optionsFlow, setOptionsFlow] = useState(M.optionsFlow);
  const [isAddingNewFlow, setIsAddingNewFlow] = useState(false)
  
  const addOptions = () =>
    setOptionsFlow([
      ...optionsFlow,
      `Flow ${optionsFlow.length + 1}`,
    ])

  
    function startAddNewFlow(){
      setIsAddingNewFlow(true)
    }

  

  return {
    optionsFlow,
    addOptions,
    startAddNewFlow
  }
  
}

export default useSidebarFlow