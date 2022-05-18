import { IField } from "@/types/fireboltJSON";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

export default function useStepFields() {
  const { dispatch, visibleStep } = useFireboltJSON();
  const stepFields = visibleStep.step.fields;

  function handleDeleteField(stepSlug: string, field: string) {
    const fieldToDelete = { stepSlug: stepSlug, field: field };
    dispatch({ type: "DELETE_FIELD", payload: fieldToDelete });
  }

  function handleEditFieldStyle(step: string, field: any, checked: boolean) {
    let newField = { ...field };

    newField["ui:styles"] = checked
      ? {
          size: "half",
        }
      : {};

    const fieldToEditStyles = { step: step, field: newField };
    dispatch({ type: "EDIT_FIELD_STYLES", payload: fieldToEditStyles });
  }

  function checkHasFieldUp(currentField: IField) {
    const fieldIndex = stepFields.findIndex(
      (field) => field.slug === currentField.slug
    );
    const previousField = stepFields[fieldIndex - 1];
    return !previousField;
  }

  function checkHasFieldDown(currentField: IField) {
    const fieldIndex = stepFields.findIndex(
      (field) => field.slug === currentField.slug
    );
    const nextField = stepFields[fieldIndex + 1];
    return !nextField;
  }

  function handleEditFieldValue(attribute: keyof IField, value: any, stepSlug: string, fieldSlug: string) {
    
    dispatch({ type: "EDIT_FIELD_CONFIG", payload: { attribute, value, stepSlug, fieldSlug } });
  }

  function moveFieldUp(stepSlug: string, fieldSlug: string) {
    dispatch({ type: "MOVE_FIELD_UP", payload: { stepSlug, fieldSlug } });
  }
  function moveFieldDown(stepSlug: string, fieldSlug: string) {
    dispatch({ type: "MOVE_FIELD_DOWN", payload: { stepSlug, fieldSlug } });
  }

  return {
    stepFields,
    checkHasFieldUp,
    handleDeleteField,
    handleEditFieldStyle,
    checkHasFieldDown,
    handleEditFieldValue,
    moveFieldUp,
    moveFieldDown,
  };
}
