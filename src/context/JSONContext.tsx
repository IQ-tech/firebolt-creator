import React, { createContext, useState, useReducer, useEffect } from "react";
import { IFireboltJSON, IStep } from "@/types/fireboltJSON";
import blankJSON from "./blankJSONBoilerplate";
import reducer, { JSONAction } from "./reducer";

interface IJSONProviderValues {
  currentJSON: IFireboltJSON;
  dispatch: React.Dispatch<JSONAction>;
  visibleStep: IStep;
  setVisibleStep(step: IStep): void;
}

export const JSONContext = createContext({} as IJSONProviderValues);

export function JSONProvider({ children }) {
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

  return (
    <JSONContext.Provider
      value={{
        currentJSON,
        dispatch,
        visibleStep: visibleStepState,
        setVisibleStep,
      }}
    >
      {children}
    </JSONContext.Provider>
  );
}
