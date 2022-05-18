import { useEffect, useState } from "react";
import slugify from "slugify";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import useSlugInput from "@/hooks/useSlugInput";

import { IStep } from "@/types/fireboltJSON";

const emptyStep = {
  step: {
    slug: "",
    friendlyname: "",
    type: "form",
    fields: [],
  },
};

export default function useStepModal({
  onCloseModal,
  editingStep,
}: {
  editingStep?: IStep;
  onCloseModal(...args: any[]): void;
}) {
  const { dispatch } = useFireboltJSON();
  const [step, setStep] = useState<IStep>(emptyStep);

  const existentFields = (editingStep?.step.fields || []).map(
    (field) => field.slug
  );

  const {
    status,
    value: inputValue,
    onChange,
    errorMessage,
    isValid: isSlugFieldValid,
    resetField,
  } = useSlugInput({
    existentSlugs: existentFields,
    defaultValue: editingStep?.step.slug,
  });

  const isValid = isSlugFieldValid && !!step.step.friendlyname;

  useEffect(() => {
    if (editingStep) {
      setStep(editingStep);
    }
  }, [editingStep]);

  const modalTitle = !!editingStep
    ? `Edit step - ${editingStep.step.friendlyname}`
    : "Create step";

  function handleCancel() {
    resetField();
    setStep(emptyStep);
    onCloseModal();
  }

  function addNewStep() {
    const newStep = {
      slug: slugify(step.step.slug),
      type: step.step.type,
      friendlyname: step.step.friendlyname,
      fields: [],
    };

    if (editingStep) {
      dispatch({
        type: "EDIT_STEP",
        payload: {
          slug: editingStep.step.slug,
          step: newStep,
        },
      });
    } else {
      dispatch({ type: "ADD_NEW_STEP", payload: { step: newStep } });
    }
    resetField();
    setStep(emptyStep);
    onCloseModal();
  }

  function handleStepData(name: string, value: string) {
    setStep((prevState) => {
      return {
        ...prevState,
        step: {
          ...prevState.step,
          [name]: value,
        },
      };
    });
  }

  return {
    status,
    value: inputValue,
    onChange,
    errorMessage,
    isValid,
    step,
    addNewStep,
    handleCancel,
    handleStepData,
    modalTitle,
  };
}
