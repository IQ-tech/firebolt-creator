import React, { createContext } from "react";
import { IFireboltJSON, IStep } from "@/types/fireboltJSON";

import { JSONAction } from "./hook/reducer";
import useJSONContext from "./hook";

interface IJSONProviderValues {
  currentJSON: IFireboltJSON;
  dispatch: React.Dispatch<JSONAction>;
  visibleStep: IStep;
  setVisibleStep(step: IStep): void;
}

export const JSONContext = createContext({} as IJSONProviderValues);

export function JSONProvider({ children }) {
  const { currentJSON, dispatch, visibleStep, setVisibleStep } =
    useJSONContext();

  return (
    <JSONContext.Provider
      value={{
        currentJSON,
        dispatch,
        visibleStep,
        setVisibleStep,
      }}
    >
      {children}
    </JSONContext.Provider>
  );
}
