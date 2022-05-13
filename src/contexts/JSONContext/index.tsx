import React, { createContext } from "react";
import { IFireboltJSON, IStep } from "@/types/fireboltJSON";

import { JSONAction } from "./hook/reducer.types";
import useJSONContext from "./hook";

interface IJSONProviderValues {
  currentJSON: IFireboltJSON;
  dispatch: React.Dispatch<JSONAction>;
  visibleStep: IStep;
  setVisibleStep(step: IStep): void;
  undoChange(): void;
  redoChange(): void;
}

export const JSONContext = createContext({} as IJSONProviderValues);

export function JSONProvider({ children }) {
  const {
    currentJSON,
    dispatch,
    visibleStep,
    setVisibleStep,
    undoChange,
    redoChange,
  } = useJSONContext();

  return (
    <JSONContext.Provider
      value={{
        currentJSON,
        dispatch,
        visibleStep,
        setVisibleStep,
        undoChange,
        redoChange,
      }}
    >
      {children}
    </JSONContext.Provider>
  );
}
