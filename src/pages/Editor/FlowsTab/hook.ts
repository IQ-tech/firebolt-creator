import { useEffect, useState } from "react";
import { mockFlows, mockSteps } from "./jsonMocks";
import { IStep, IFlow } from "@/types/fireboltJSON";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

const useFlowTabs = () => {
  const { currentJSON, dispatch } = useFireboltJSON();

  // const defaultFlow = {
  //   slug: "default",
  //   steps: currentJSON.steps.map((e) => e.step.slug),
  // };

  const flowsState = currentJSON.tracks || [];
  const flowSteps = currentJSON.steps || [];

  // se tiver criando o json do zero
  // adicionar o fluxo default sem nenhum passo na array de passos

  const [visibleFlow, setVisibleFlow] = useState<IFlow>(
    () => currentJSON.tracks.find((flow) => flow.slug === "default") as IFlow
  );

  // useEffect(() => {
  //   dispatch({ type: "ADDFLOW", payload: defaultFlow })
  //   console.log(currentJSON.steps.map(e => e.step.slug))
  // }, [flowsState])

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
      steps: currentJSON.steps.map((e) => e.step.slug),
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
    //steps: mockStepsState, // todo - change to state from context
    flows: flowsState,
  };
};

export default useFlowTabs
