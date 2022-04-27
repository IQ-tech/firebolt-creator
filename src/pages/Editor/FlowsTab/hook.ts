import { useEffect, useState } from "react";
import { mockFlows, mockSteps } from "./jsonMocks";
import {IStep, IFlow } from "@/types/fireboltJSON"


const useFlowTabs = () => {
  const [mockFlowsState, setMockFlowsState] = useState(mockFlows);
  const [mockStepsState, setMockStepsState] = useState<IStep[]>(mockSteps);

  useEffect(() => {
    console.log(mockFlowsState)
  }, [mockFlowsState])

  const [visibleFlow, setVisibleFlow] = useState<IFlow>(
    () => mockFlows.find((flow) => flow.slug === "default") as IFlow
  );


  function changeVisibleFlow(flowSlug: string) {
    const newFlow = mockFlowsState.find((flow) => flow.slug === flowSlug);
    if (newFlow) {
      setVisibleFlow(newFlow);
    }
  }

  function addNewFlow(flowSlug: string) {
    const newFlow: IFlow = {
      slug: flowSlug,
      steps: [],
    };
    const newFlowsList = [...mockFlows, newFlow];
    setMockFlowsState(newFlowsList); // change to context dispatch
  }

  function removeFlow(flowSlug: string) {
    const newFlowsArray = mockFlowsState.filter(
      (flow) => flow.slug !== flowSlug
    );
    setMockFlowsState(newFlowsArray);
  }

  function renameFlow(flowSlug: string, newFlowSlug: string) {
    const newFlowsArray = mockFlowsState.map((flow) => {
      if (flow.slug === flowSlug) {
        return { ...flow, slug: newFlowSlug };
      } else {
        return flow;
      }
    });

    setMockFlowsState(newFlowsArray);
  }

  return {
    changeVisibleFlow,
    visibleFlow,
    addNewFlow,
    removeFlow,
    renameFlow,
    steps: mockStepsState, // todo - change to state from context
    flows: mockFlowsState
  };
};

export default useFlowTabs;
