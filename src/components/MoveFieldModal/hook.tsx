import { message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import { IField, IStep } from "@/types/fireboltJSON";
import { useEffect, useState } from "react";

const { confirm } = Modal;

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
  const [error, setError] = useState("");
  const { dispatch } = useFireboltJSON();
  const selectedStepData = stepsList.find(
    (step) => step.step.slug === selectedStep
  );

  useEffect(() => {
    setSelectedStep(visibleStep.step.slug);
  }, [visibleStep]);

  const isValid =
    selectedStep && selectedStep !== visibleStep.step.slug && !error;

  function selectStep(stepId: string) {
    setSelectedStep(stepId);
    const selectedStepData = stepsList.find(
      (step) => step.step.slug === stepId
    );

    if (selectedStepData) {
      const stepAlreadyHasField = selectedStepData.step.fields.find(
        (field) => field.slug === movingField?.slug
      );
      if (stepAlreadyHasField) {
        setError(
          `step ${selectedStepData.step.friendlyname} already has a field with slug "${movingField?.slug}"`
        );
      }
    }
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
      message.success(
        `Field ${movingField.slug} moved to step: ${selectedStepData?.step?.friendlyname}`
      );
      setSelectedStep(undefined);
    }
  }

  function showConfirm() {
    confirm({
      title: `Do you really want to move the field to ${selectedStepData?.step?.friendlyname}`,
      icon: <ExclamationCircleOutlined />,
      content: "This will remove this field from this step",
      onOk() {
        onSubmit();
      },
    });
  }

  function handleClose() {
    setSelectedStep(visibleStep.step.slug);
    setError("");
    onClose();
  }

  return {
    selectStep,
    selectedStep,
    showConfirm,
    isValid,
    handleClose,
    error,
    filteredStepsList: stepsList.filter((step) => step.step.type === "form"),
  };
}
