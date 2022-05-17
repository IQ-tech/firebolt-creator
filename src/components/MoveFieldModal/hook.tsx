import { message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
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
  const selectedStepData = stepsList.find(
    (step) => step.step.slug === selectedStep
  );

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
      message.success(
        `Field ${movingField.slug} moved to step: ${selectedStepData?.step?.friendlyname}`
      );
      setSelectedStep(undefined);
    }
  }

  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: `Do you really want to move the field to ${selectedStepData?.step?.friendlyname}`,
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      onOk() {
        onSubmit();
      },
    });
  }

  return {
    selectedStep,
    selectStep,
    showConfirm,
    filteredStepsList: stepsList.filter((step) => step.step.type === "form"),
  };
}
