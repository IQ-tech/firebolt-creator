import { IFireboltJSON } from "@/types/fireboltJSON";
import AJV from "ajv";
import { useState } from "react";

import { JSONSchema } from "./schema";

export default function useJSONModal({ onCloseModal, onUploadJSON }) {
  const [json, setJson] = useState<IFireboltJSON>({} as IFireboltJSON);
  const [jsonError, setJsonError] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  function handleCancel() {
    onCloseModal();
    setJson({} as IFireboltJSON);
    setDisableButton(true);
  }

  const handleUpload = (event) => {
    const file = event?.file?.originFileObj;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener("load", () => {
      const safeResult = (reader.result as string) || "";
      const parsedResult = JSON.parse(safeResult);

      setJson(parsedResult);
      setJsonError("");
      validateJSON(safeResult);
    });
  };

  const handleEditor = ({ jsObject, json, error }) => {
    setJson(jsObject);
    setJsonError("");

    if (!error && json) validateJSON(json);
  };

  const validateJSON = (json: string | object) => {
    const jsonValidator = new AJV();
    const validate = jsonValidator.compile(JSONSchema);

    const uploadedJSON = typeof json === "string" ? JSON.parse(json) : json;
    const isValid = validate(uploadedJSON);

    setDisableButton(!isValid);

    if (!isValid) {
      const errors = validate.errors || [];
      errors.map((error) => {
        setJsonError(`${error.instancePath} ${error.message}`);
      });
    }
  };

  function handleTabChange(): void {
    setJson({} as IFireboltJSON);
    setJsonError("");
  }

  function handleOk() {
    onUploadJSON(json);
  }

  return {
    json,
    jsonError,
    disableButton,
    handleCancel,
    handleUpload,
    handleEditor,
    handleTabChange,
    handleOk,
  };
}
