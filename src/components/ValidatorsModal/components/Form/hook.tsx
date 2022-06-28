import { validators } from "@iq-firebolt/validators";
import { Form } from "antd";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

export default function useFormValidators({ field, stepSlug }) {
  const { dispatch } = useFireboltJSON();

  const allValidator = Object.keys(validators)

  const existingValidator = field?.validators?.reduce((acc, cur) => {
    acc = [...acc, cur.type];
    return acc;
  }, []);

  const validatorAvailable = allValidator?.filter(
    (validator) => !existingValidator?.includes(validator)
  );

  const fieldsInit = field?.validators?.reduce((acc, cur, index) => {
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
  }, []);

  const [form] = Form.useForm();

  function handleChangeInput(value: string) {
    dispatch({
      type: "EDIT_OR_ADD_VALIDATOR",
      payload: {
        stepSlug: stepSlug,
        fieldSlug: field.slug,
        types: value,
      },
    });
  }

  const onFinish = (values: any) => {
    // console.log("Received values of form:", values);
  };

  return {
    allValidator,
    existingValidator,
    validatorAvailable,
    fieldsInit,

    form,
    handleChangeInput,
    onFinish,
  };
}
