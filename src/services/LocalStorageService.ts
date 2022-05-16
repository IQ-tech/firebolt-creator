import { IFireboltJSON } from "@/types/fireboltJSON";

const localJSONKey = "fbt-creator-json";

const LocalStorageService = {
  setLocalJSON(fireboltJSON: IFireboltJSON) {
    const stringfied = JSON.stringify(fireboltJSON);
    localStorage.setItem(localJSONKey, stringfied);
  },

  getLocalJSON(): IFireboltJSON | undefined {
    const stringfied = localStorage.getItem(localJSONKey);
    if (!stringfied) return;
    const parsed = JSON.parse(stringfied);
    return parsed;
  },
};

export default LocalStorageService;
