import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import useSlugInput from "@/hooks/useSlugInput";
import { IStep } from "@/types/fireboltJSON";
import { message } from "antd";

export default function useAddFieldModal({
  visibleStep,
  onClose,
}: {
  visibleStep: IStep;
  onClose: (...args: any[]) => void;
}) {
  const existentFields = visibleStep.step.fields.map((field) => field.slug);

  const {
    status,
    value: inputValue,
    onChange,
    errorMessage,
    isValid,
    resetField,
  } = useSlugInput({ existentSlugs: existentFields });

  const { dispatch } = useFireboltJSON();

  function addStep() {
    dispatch({
      type: "ADD_FIELD",
      payload: { step: visibleStep.step.slug, fieldSlug: inputValue },
    });
    if (onClose) onClose();
    resetField();
    message.success(
      `Field ${inputValue} added to step ${visibleStep.step.friendlyname}`
    );
  }

  function handleClose() {
    resetField();
    onClose();
  }

  return {
    status,
    value: inputValue,
    onChange,
    errorMessage,
    isValid,
    addStep,
    handleClose
  };
}
