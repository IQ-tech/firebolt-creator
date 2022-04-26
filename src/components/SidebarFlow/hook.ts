import { useState } from "react";
import * as M from "@/components/Flow/mocks/mockFlows";


const useSidebarFlow = () => {
  const [optionsFlow, setOptionsFlow] = useState(M.optionsFlow);
  
  const addOptions = () =>
    setOptionsFlow([
      ...optionsFlow,
      `Flow ${optionsFlow.length + 1}`,
    ])

  return {
    optionsFlow,
    addOptions
  }
  
}

export default useSidebarFlow