import { useState } from "react";

import { useFireboltJSON } from "@/hooks/useFireboltJSON";

import { IStep } from "@/types/fireboltJSON";

export default function useStepModal({ onCloseModal }) {
  const { dispatch } = useFireboltJSON();
  const [step, setStep] = useState<IStep>({
    step: {
      slug: "",
      friendlyname: "",
      type: "form",
      fields: [],
    },
  });

  function handleCancel() {
    onCloseModal();
  }

  function addNewStep() {
    const newStep = {
      step: {
        slug: step.step.slug,
        type: step.step.type,
        friendlyname: step.step.friendlyname,
        fields: [],
      },
    };

    dispatch({ type: "ADD_NEW_STEP", payload: newStep });

    onCloseModal()
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
  };
}
