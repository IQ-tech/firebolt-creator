import { IStep } from "@/types/fireboltJSON";
import { useState } from "react";

export default function useMoveFieldModal({
  stepsList = [],
  visibleStep,
  onClose
}: {
  stepsList: IStep[];
  visibleStep: IStep;
  onClose(): void;
}) {
  const [selectedStep, setSelectedStep] = useState<string>();

  function selectStep(stepId: string) {
    setSelectedStep(stepId);
  }

  function onSubmit(){
    // dispatch change
    onClose()
  }

  return {
    selectedStep,
    selectStep,
    onSubmit,
    filteredStepsList: stepsList.filter((step) => step.step.type === "form"),
  };
}
