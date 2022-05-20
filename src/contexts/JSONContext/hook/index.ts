import { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IFireboltJSON, IStep } from "@/types/fireboltJSON";
import blankJSON from "../blankJSONBoilerplate";

import reducer from "./reducer";
import useHistory from "./useHistory";

import LocalStorageService from "@/services/LocalStorageService";

export default function useJSONContext() {
  const navigate = useNavigate();
  const [currentJSON, dispatch] = useReducer(reducer, blankJSON);
  const [loadedJSON, setLoadedJSON] = useState(false);
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

  useEffect(() => {
    if (loadedJSON) {
      LocalStorageService.setLocalJSON(currentJSON);
    }
  }, [currentJSON]);

  useEffect(() => {
    if (!loadedJSON) {
      const jsonFromStorage = LocalStorageService.getLocalJSON();
      if (jsonFromStorage) {
        dispatch({ type: "START_WITH_JSON", payload: jsonFromStorage });
        setLoadedJSON(true);
        navigate("/app/editor/main");
      } else {
        navigate("/");
      }
    }
  }, []);

  function loadBlankJSON() {
    dispatch({ type: "START_BLANK" });
    setLoadedJSON(true);
  }

  function loadUploadedJSON(newJSON: IFireboltJSON) {
    dispatch({ type: "START_WITH_JSON", payload: newJSON });
    setLoadedJSON(true);
  }

  function setVisibleStep(step: IStep) {
    setVisibleStepSlug(step?.step?.slug);
  }

  function startNewSession() {
    setLoadedJSON(false);
    dispatch({ type: "START_BLANK" });
    LocalStorageService.clearLocalJSON();
    navigate("/");
  }

  return {
    currentJSON,
    dispatch,
    visibleStep: visibleStepState,
    setVisibleStep,
    undoChange,
    redoChange,
    loadUploadedJSON,
    loadBlankJSON,
    startNewSession,
  };
}
