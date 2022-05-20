import { IFireboltJSON } from "@/types/fireboltJSON";
import React, { useEffect } from "react";
import { JSONAction } from "./reducer.types";

interface IUseHistory {
  currentJSON: IFireboltJSON;
  dispatch: React.Dispatch<JSONAction>;
}


interface IHistory {
  marker: number
  history: IFireboltJSON[]
}

const sessionStorageKey = "jsonHistory";
const SessionService = {
  getHistory(): IFireboltJSON[] {
    const storageItem = sessionStorage.getItem(sessionStorageKey);
    if (!storageItem) return [];
    return JSON.parse(storageItem);
  },
  pushHistoryItem(item: IFireboltJSON) {
    const currentHistory = this.getHistory();
    const newHistory = [...currentHistory, item];
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(newHistory));
  },
};

export default function useHistory({ currentJSON }: IUseHistory) {
  useEffect(() => {}, [currentJSON]);

  function undoChange() {}

  function redoChange() {}

  return {
    undoChange,
    redoChange,
  };
}
