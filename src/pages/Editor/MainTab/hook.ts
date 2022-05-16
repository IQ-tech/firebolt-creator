import { useState } from "react";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import { IStep } from "@/types/fireboltJSON";

export default function useMainTab() {
  const [isAddStepModalOpen, setIsAddModalOpen] = useState(false);
  const { visibleStep, setVisibleStep } = useFireboltJSON();
  const [editingStep, setEditingStep] = useState<IStep>();
  const isVisibleStepCustom = visibleStep?.step?.type !== "form";

  function openAddStepModal() {
    setIsAddModalOpen(true);
  }

  function openEditStepModal(step: IStep) {
    setEditingStep(step);
    setIsAddModalOpen(true);
  }

  function closeAddStepModal() {
    setEditingStep(undefined);
    setIsAddModalOpen(false);
  }

  return {
    isAddStepModalOpen,
    openAddStepModal,
    closeAddStepModal,
    visibleStep,
    setVisibleStep,
    openEditStepModal,
    editingStep,
    isVisibleStepCustom,
  };
}
