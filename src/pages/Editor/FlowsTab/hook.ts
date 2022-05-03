import { useEffect, useState } from "react";
import { IStep, IFlow } from "@/types/fireboltJSON";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

const useFlowTabs = () => {
  const { currentJSON, dispatch } = useFireboltJSON();

  const flowsState = currentJSON.tracks || [];
  const flowSteps = currentJSON.steps || [];

  const [visibleFlow, setVisibleFlow] = useState<IFlow>(
    () => currentJSON.tracks.find((flow) => flow.slug === "default") as IFlow
  );


  const validSlug = (newFlowSlug: string): boolean => {
    const slugAlreadyExists = !!flowsState.find(
      (flow) => flow.slug === newFlowSlug
    );
    return !!newFlowSlug && !slugAlreadyExists;
  };

  const changeVisibleFlow = (flowSlug: string) => {
    const newFlow = flowsState.find((flow) => flow.slug === flowSlug);
    if (newFlow) {
      setVisibleFlow(newFlow);
    }
  }

  const addNewFlow = (flowSlug: string) => {
    if (!validSlug(flowSlug)) return;

    const newFlow: IFlow = {
      slug: flowSlug,
      steps: currentJSON.steps.map((e) => e.step.friendlyname),
    };

    if (flowSlug) {
      dispatch({ type: "ADD_FLOW", payload: newFlow });
  }
}

  const removeFlow = (flowSlug: string) => {
    dispatch({ type: "REMOVE_FLOW", payload: { slug: flowSlug } });
  }

  const renameFlow = (flowSlug: string, newFlowSlug: string) => {
    if (!validSlug(newFlowSlug)) return;
    dispatch({
      type: "RENAME_FLOW",
      payload: { slug: flowSlug, newSlug: newFlowSlug },
    });
  }

  return {
    changeVisibleFlow,
    visibleFlow,
    addNewFlow,
    removeFlow,
    renameFlow,
    steps: flowSteps,
    flows: flowsState,
  };
};

export default useFlowTabs
