import { validators } from "@iq-firebolt/validators";
import { Form } from "antd";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

export default function useFormValidators({ field, stepSlug }) {
  const { dispatch } = useFireboltJSON();

  const allValidator = Object.keys(validators).sort();

  const existingValidator = field?.validators?.reduce((acc, cur) => {
   // if (!allValidator.includes(cur.type)) allValidator.push(cur.type); TODO: firebolt(client) tem que aceitar validadores que não "existe" na lib.

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

  function handleChangeInput(value: []) {
    const validTypes = value.filter(type => allValidator.includes(type)) // TODO: Filtrando somente os validadores que o firebolt aceita(passa "value" direto para "types" quando o firebolt aceita qualquer "tipo")
    
    dispatch({
      type: "EDIT_OR_ADD_VALIDATOR",
      payload: {
        stepSlug: stepSlug,
        fieldSlug: field.slug,
        types: validTypes,
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
