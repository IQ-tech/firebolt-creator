import { useState } from "react";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import { IField, IStep } from "@/types/fireboltJSON";

export default function useMainTab() {
  const [isAddStepModalOpen, setIsAddModalOpen] = useState(false);
  const { visibleStep, setVisibleStep, currentJSON } = useFireboltJSON();
  const [editingStep, setEditingStep] = useState<IStep>();
  const [isMoveFieldModalVisible, setIsMoveFieldModalVisible] = useState(false);
  const isVisibleStepCustom = visibleStep?.step?.type !== "form";
  const [movingField, setMovingField] = useState<IField>();

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

  function openMoveField(field: IField) {
    setMovingField(field);
    setIsMoveFieldModalVisible(true);
  }

  function closeMoveField() {
    setMovingField(undefined);
    setIsMoveFieldModalVisible(false);
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
    isMoveFieldModalVisible,
    openMoveField,
    closeMoveField,
    movingField,
    currentJSON,
  };
}
