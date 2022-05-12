import { useState, useReducer, useEffect } from "react";
import { IStep } from "@/types/fireboltJSON";
import blankJSON from "../blankJSONBoilerplate";

import reducer from "./reducer";

export default function useJSONContext() {
  const [currentJSON, dispatch] = useReducer(reducer, blankJSON);
  const [visibleStepState, setVisibleStepState] = useState<IStep>(
    currentJSON?.steps[0]
  );
  const [visibleStepSlug, setVisibleStepSlug] = useState<string>(
    currentJSON?.steps[0]?.step?.slug
  );

  useEffect(() => {
    const stepData = currentJSON.steps.find(
      (step) => step?.step?.slug === visibleStepSlug
    );
    if (stepData) setVisibleStepState(stepData);
  }, [visibleStepSlug, currentJSON]);

  useEffect(() => {
    console.log(currentJSON);
  }, [currentJSON]);

  function setVisibleStep(step: IStep) {
    setVisibleStepSlug(step?.step?.slug);
  }
  return {
    currentJSON,
    dispatch,
    visibleStep: visibleStepState,
    setVisibleStep,
  };
}
