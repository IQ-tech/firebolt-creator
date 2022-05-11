import React, { createContext, useState, useReducer, useEffect } from "react";
import { IFireboltJSON, IStep } from "@/types/fireboltJSON";
import blankJSON from "./blankJSONBoilerplate";
import reducer, { JSONAction } from "./reducer";

interface IJSONProviderValues {
  currentJSON: IFireboltJSON;
  dispatch: React.Dispatch<JSONAction>;
  visibleStep: IStep;
  setVisibleStep: React.Dispatch<React.SetStateAction<IStep>>;
}

export const JSONContext = createContext({} as IJSONProviderValues);

export function JSONProvider({ children }) {
  const [currentJSON, dispatch] = useReducer(reducer, blankJSON);
  const [visibleStep, setVisibleStep] = useState<IStep>(currentJSON.steps[0]);

  useEffect(() => {
    console.log(currentJSON);
  }, [currentJSON]);

  return (
    <JSONContext.Provider
      value={{ currentJSON, dispatch, visibleStep, setVisibleStep }}
    >
      {children}
    </JSONContext.Provider>
  );
}
