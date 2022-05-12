import { useState } from "react";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

export default function useMainTab() {
  const [isAddStepModalOpen, setIsAddModalOpen] = useState(false);
  const { visibleStep, setVisibleStep } = useFireboltJSON();

  function openAddStepModal() {
    setIsAddModalOpen(true);
  }

  function closeAddStepModal() {
    setIsAddModalOpen(false);
  }

  return {
    isAddStepModalOpen,
    openAddStepModal,
    closeAddStepModal,
    visibleStep,
    setVisibleStep,
  };
}
