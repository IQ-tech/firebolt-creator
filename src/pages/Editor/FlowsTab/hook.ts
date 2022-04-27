import { useState } from "react";
import { mockFlows, mockSteps } from "./jsonMocks";

const useFlowTabs = () => {
  const [visibleFlowSlug, setVisibleFlowSlug] = useState("default");

  const [visibleFlow, setVisibleFlow] = useState(() =>
    mockFlows.find((flow) => flow.slug === "default")
  );

  const [mockFlowState, setMockFlowsState] = useState(mockFlows);
  const [mockStepsState, setMockStepsState] = useState(mockSteps);

  function changeVisibleFlow(flowSlug: string) {
    const newFlow = mockFlowState.find((flow) => flow.slug === flowSlug);
    setVisibleFlow(newFlow);
  }

  return {
    visibleFlowSlug,
    setVisibleFlowSlug,

    changeVisibleFlow,
    visibleFlow,
    setVisibleFlow
  };
};

export default useFlowTabs;
