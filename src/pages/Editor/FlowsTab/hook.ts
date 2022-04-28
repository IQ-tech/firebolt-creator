import { useEffect, useState } from "react";
import { mockFlows, mockSteps } from "./jsonMocks";
import { IStep, IFlow } from "@/types/fireboltJSON";

const useFlowTabs = () => {
  const [mockFlowsState, setMockFlowsState] = useState(mockFlows);
  const [mockStepsState, setMockStepsState] = useState<IStep[]>(mockSteps);


  const [visibleFlow, setVisibleFlow] = useState<IFlow>(
    () => mockFlows.find((flow) => flow.slug === "default") as IFlow
  );
  // useEffect(() => {
  //   console.log(mockFlowsState)
  // }, [mockFlowsState])

  const validSlug = (newFlowSlug: string): boolean => {
    const slugAlreadyExists = !!mockFlowsState.find(
      (flow) => flow.slug === newFlowSlug
    );
    return !!newFlowSlug && !slugAlreadyExists;
  };



  function changeVisibleFlow(flowSlug: string) {
    const newFlow = mockFlowsState.find((flow) => flow.slug === flowSlug);
    if (newFlow) {
      setVisibleFlow(newFlow);
    }
  }

  function addNewFlow(flowSlug: string) {
    if (!validSlug(flowSlug)) return;

    const newFlow: IFlow = {
      slug: flowSlug,
      steps: [],
    };
    const newFlowsList = [...mockFlowsState, newFlow];
    console.log(newFlowsList);
    if (flowSlug) return setMockFlowsState(newFlowsList); // change to context dispatch
  }

  function removeFlow(flowSlug: string) {
    const newFlowsArray = mockFlowsState.filter(
      (flow) => flow.slug !== flowSlug
    );
    setMockFlowsState(newFlowsArray);
  }

  function renameFlow(flowSlug: string, newFlowSlug: string) {
    if (!validSlug(newFlowSlug)) return;

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
    flows: mockFlowsState,
  };
};

export default useFlowTabs;
