import { IStep } from "@/types/fireboltJSON";
import { useState } from "react";

export default function useMoveFieldModal({
  stepsList = [],
}: {
  stepsList: IStep[];
}) {
  const [selectedStep, setSelectedStep] = useState();

  return {
    selectedStep,
    filteredStepsList: stepsList.filter((step) => step.step.type === "form"),
  };
}
