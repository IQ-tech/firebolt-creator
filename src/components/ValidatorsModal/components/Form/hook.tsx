import { validators } from "@iq-firebolt/validators";
import { Form } from "antd";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

export default function useFormValidators({ field, stepSlug }) {
  const { dispatch } = useFireboltJSON();

  const allValidator = Object.keys(validators).sort();

  const brokenValidators = [
    "customStringValidation",
    "file",
    "minAge",
    "numberRange",
    "sameValue",
    "textCharsLength",
  ];

  const onlyGoodValidators = allValidator.filter(
    (validators) => !brokenValidators.includes(validators)
  ); // TODO: temp, interim solution until broken validadotrs work again.

  const existingValidator = field?.validators?.reduce(
    (acc: string[], cur: { type: string }) => {
      // if (!allValidator.includes(cur.type)) allValidator.push(cur.type); TODO: firebolt(client) have to accept validators that don't "exist" in the lib.

      acc = [...acc, cur.type];
      return acc;
    },
    []
  );

  const validatorAvailable = onlyGoodValidators?.filter(
    (validator) => !existingValidator?.includes(validator)
  );

  const fieldsInit = field?.validators?.reduce(
    (acc: string[] | any, cur: { type: string }, index: number) => {
      acc = [
        ...acc,
        {
          name: cur.type,
          key: 100 + index,
          isListField: true,
          fieldKey: 100 + index,
        },
      ];

      return acc;
    },
    []
  );

  const [form] = Form.useForm();

  function handleChangeInput(value: string[]) {
    const validTypes = value.filter((type) =>
      onlyGoodValidators.includes(type)
    ); // TODO: Filtering only validators that firebolt accepts (pass "value" straight to "types" when firebolt accepts any "type")

    dispatch({
      type: "EDIT_OR_ADD_VALIDATOR",
      payload: {
        stepSlug: stepSlug,
        fieldSlug: field.slug,
        types: validTypes,
      },
    });
  }

  const onFinish = (values) => {
    // console.log("Received values of form:", values);
  };

  return {
    onlyGoodValidators,
    existingValidator,
    validatorAvailable,
    fieldsInit,

    form,
    handleChangeInput,
    onFinish,
  };
}
