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
    const alreadyHasSlug = existentSlugs.includes(value);
    if (!isValid) {
      setStatus("error");
      setErrorMessage(
        "The name should not contain spaces and special characters"
      );
    } else if (alreadyHasSlug) {
      setStatus("error");
      setErrorMessage(`the slug ${value} already exists`);
    } else {
      setStatus(undefined);
      setErrorMessage("");
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValue(value);
    validateValue(value);
  }

  function resetField() {
    setValue("");
  }

  return { status, value, onChange, errorMessage, isValid, resetField };
}
