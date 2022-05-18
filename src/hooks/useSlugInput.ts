import React, { useState } from "react";

export default function useSlugInput({
  existentSlugs = [],
}: {
  existentSlugs?: string[];
} = {}) {
  const [status, setStatus] = useState<"error" | "warning" | undefined>();
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isValid = !!value && !status;

  function validateValue(value: string) {
    const isValid = value.match(/^[a-zA-Z0-9-_]+$/);
    if (!isValid) {
      setStatus("error");
      setErrorMessage(
        "The name should not contain spaces and special characters"
      );
    } else {
      setStatus(undefined);
      setErrorMessage("");
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log(value);
    setValue(value);
    validateValue(value);
  }

  return { status, value, onChange, errorMessage, isValid };
}
