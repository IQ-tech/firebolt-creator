import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IStep } from "@/types/fireboltJSON";
import blankJSON from "../blankJSONBoilerplate";

import reducer from "./reducer";
import useHistory from "./useHistory";

import LocalStorageService from "@/services/LocalStorageService";

export default function useJSONContext() {
  const navigate = useNavigate();
  const [currentJSON, dispatch] = useReducer(reducer, blankJSON);
  const [isLoadingJSON, setIsLoadingJSON] = useState(true)
  const [visibleStepState, setVisibleStepState] = useState<IStep>(
    currentJSON?.steps[0]
  );
  const [visibleStepSlug, setVisibleStepSlug] = useState<string>(
    currentJSON?.steps[0]?.step?.slug
  );

  const { undoChange, redoChange } = useHistory({ currentJSON, dispatch });

  useEffect(() => {
    const stepData = currentJSON.steps.find(
      (step) => step?.step?.slug === visibleStepSlug
    );
    if (stepData) setVisibleStepState(stepData);
  }, [visibleStepSlug, currentJSON]);

  // useEffect(() => {
  //   LocalStorageService.setLocalJSON(currentJSON);
  // }, [currentJSON]);

  useEffect(() => {
    const jsonFromStorage = LocalStorageService.getLocalJSON();
    if (jsonFromStorage) {
      dispatch({ type: "START_WITH_JSON", payload: jsonFromStorage });
      navigate("/app/editor/main");
    } else {
      navigate("/");
    }
  }, []);

  function setVisibleStep(step: IStep) {
    setVisibleStepSlug(step?.step?.slug);
  }
  return {
    currentJSON,
    dispatch,
    visibleStep: visibleStepState,
    setVisibleStep,
    undoChange,
    redoChange,
    isLoadingJSON
  };
}
