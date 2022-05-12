import { useEffect, useState } from "react";

import { useFireboltJSON } from "@/hooks/useFireboltJSON";

import { IStep } from "@/types/fireboltJSON";

const emptyStep = {
  step: {
    slug: "",
    friendlyname: "",
    type: "form",
    fields: [],
  },
};

export default function useStepModal({ onCloseModal, editingStep }) {
  const { dispatch } = useFireboltJSON();
  const [step, setStep] = useState<IStep>(emptyStep);

  useEffect(() => {
    if (editingStep) {
      setStep(editingStep);
    }
  }, [editingStep]);

  const modalTitle = !!editingStep
    ? `Edit step - ${editingStep.step.friendlyname}`
    : "Create step";

  function handleCancel() {
    onCloseModal();
  }

  function addNewStep() {
    const newStep = {
      slug: step.step.slug,
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
    step,
    addNewStep,
    handleCancel,
    handleStepData,
    modalTitle,
  };
}
