import { useEffect, useState, useRef } from "react";
import { IFlow } from "@/types/fireboltJSON";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

import usePrevious from "@/hooks/usePrevious";

const useFlowTabs = () => {
  const { currentJSON, dispatch } = useFireboltJSON();

  const flowsState = currentJSON.tracks || [];
  const flowSteps = currentJSON.steps || [];

  const prevFlowsState = usePrevious(flowsState);

  const flowGenerator = (flowSlug: string) => {
    const newFlow: IFlow = {
      slug: flowSlug,
      steps: flowSteps.map((e) => e?.step.slug),
    };
    return newFlow;
  };

  const [visibleFlow, setVisibleFlow] = useState<IFlow>(() => {
    const defaultFlow = flowsState?.find((flow) => flow.slug === "default") as IFlow;
    return defaultFlow
  });

  const prevVisibleFlowSlug = usePrevious(visibleFlow.slug);

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

  useEffect(() => {
    const len = flowsState.length;

    if (len > (prevFlowsState || []).length) {
      setVisibleFlow(flowsState[len - 1]);
    } else if (len < (prevFlowsState || []).length) {
      if (visibleFlow.slug === prevVisibleFlowSlug) {
        setVisibleFlow(flowsState[len - 1]);
      }
    }
  }, [flowsState]);

  const addNewFlow = (flowSlug: string) => {
    if (!validSlug(flowSlug)) return;

    if (flowSlug) {
      dispatch({ type: "ADD_FLOW", payload: flowGenerator(flowSlug) });
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
