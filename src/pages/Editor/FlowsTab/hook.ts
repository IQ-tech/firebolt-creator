import { useEffect, useState } from "react";
import { IFlow } from "@/types/fireboltJSON";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

const useFlowTabs = () => {
  const { currentJSON, dispatch } = useFireboltJSON();

  const flowsState = currentJSON.tracks || [];
  const flowSteps = currentJSON.steps || [];


  const flowGenerator = (flowSlug: string) => {
    const newFlow: IFlow = {
      slug: flowSlug,
      steps: [],
    };
    return newFlow;
  };

  const [visibleFlow, setVisibleFlow] = useState<IFlow>(
    flowGenerator("default")
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
  };

  useEffect(() => {
    changeVisibleFlow(visibleFlow?.slug);
  }, []);

  const addNewFlow = (flowSlug: string) => {
    if (!validSlug(flowSlug)) return;

    if (flowSlug) {
      dispatch({ type: "ADD_FLOW", payload: flowGenerator(flowSlug) });
      changeVisibleFlow(flowSlug);
    }
  };

  const removeFlow = (flowSlug: string) => {
    dispatch({ type: "REMOVE_FLOW", payload: { slug: flowSlug } });
  };

  const renameFlow = (flowSlug: string, newFlowSlug: string) => {
    if (!validSlug(newFlowSlug)) return;
    dispatch({
      type: "RENAME_FLOW",
      payload: { slug: flowSlug, newSlug: newFlowSlug },
    });
  };

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

export default useFlowTabs;
