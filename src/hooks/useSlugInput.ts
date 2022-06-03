import React, { useEffect, useState } from "react";

export default function useSlugInput({
  existentSlugs = [],
  defaultValue,
}: {
  existentSlugs?: string[];
  defaultValue?: string;
} = {}) {
  const [status, setStatus] = useState<"error" | "warning" | undefined>();
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isValid = !!value && !status;

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

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
    setStatus(undefined);
    setErrorMessage("");
  }

  return { status, value, onChange, errorMessage, isValid, resetField };
}
