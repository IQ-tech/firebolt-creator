import { useState } from "react";
import * as M from "@/components/Flow/mocks/mockFlows";

const useFlowTabs = () => {
  const [currentFlow, setCurrentFlow] = useState(M.mockFlows);

  return {
    currentFlow,
  };
};

export default useFlowTabs;
