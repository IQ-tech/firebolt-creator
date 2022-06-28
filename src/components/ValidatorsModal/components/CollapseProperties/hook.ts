import { useFireboltJSON } from "@/hooks/useFireboltJSON";

export default function useCollapseProperties({
  fieldSlug,
  stepSlug,
  existingValidator,
}) {
  const { dispatch } = useFireboltJSON();

  function handleChangeInput(value: string, valueCurrent: string) {
    const validatorChanger = existingValidator.map((type) => {
      if (type === valueCurrent) {
        type = value;
      }
      return type;
    });

    dispatch({
      type: "EDIT_OR_ADD_VALIDATOR",
      payload: {
        stepSlug: stepSlug,
        fieldSlug: fieldSlug.slug,
        types: validatorChanger,
      },
    });
  }

  return {
    dispatch,
    handleChangeInput
  };
}
