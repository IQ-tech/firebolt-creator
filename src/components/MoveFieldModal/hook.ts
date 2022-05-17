import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import { IField, IStep } from "@/types/fireboltJSON";
import { useState } from "react";

export default function useMoveFieldModal({
  stepsList = [],
  visibleStep,
  onClose,
  movingField,
}: {
  stepsList: IStep[];
  visibleStep: IStep;
  onClose(): void;
  movingField?: IField;
}) {
  const [selectedStep, setSelectedStep] = useState<string>();
  const { dispatch } = useFireboltJSON();

  function selectStep(stepId: string) {
    setSelectedStep(stepId);
  }

  function onSubmit() {
    if (!!selectedStep && !!movingField) {
      dispatch({
        type: "MOVE_FIELD_TO_STEP",
        payload: {
          fromStepSlug: visibleStep.step.slug,
          toStepSlug: selectedStep,
          fieldSlug: movingField.slug,
        },
      });
      onClose();
      setSelectedStep(undefined);
    }
  }

  return {
    selectedStep,
    selectStep,
    onSubmit,
    filteredStepsList: stepsList.filter((step) => step.step.type === "form"),
  };
}
