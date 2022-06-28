import { validators } from "@iq-firebolt/validators";
import { Form, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import CollapseProperties from "../CollapseProperties";

export const FormValidators = ({ field, stepSlug }) => {
  const { dispatch } = useFireboltJSON();

  const existingValidator = field?.validators?.reduce((acc, cur) => {
    acc = [...acc, cur.type];
    return acc;
  }, []);

  const validatorAvailable = Object.keys(validators)?.filter(
    (validator) => !existingValidator?.includes(validator)
  );

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

  const valueInit = field?.validators?.reduce((acc, cur, index) => {
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
  console.log(
    "🚀 ~ file: index.tsx ~ line 50 ~ FormValidators ~ valueInit",
    valueInit
  );

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form:", values);
  };

  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.List name="validators">
        {(fields, { add, remove }) => (
          <>
            <Form.Item
              name="new"
              noStyle
              shouldUpdate={(prevValues, curValues) => {
                return prevValues.validators !== curValues.validators;
              }}
            >
              <CollapseProperties
                data={[...fields, ...valueInit]}
                remove={remove}
                fieldSlug={field}
                stepSlug={stepSlug}
                validatorAvailable={validatorAvailable}
                existingValidator={existingValidator}
              />
            </Form.Item>

            <Form.Item>
              {/* <p>Validators</p>  */}
              <Select
                mode="tags"
                style={{
                  margin: "10px 0px",
                  width: "100%",
                  textAlign: "center",
                }}
                placeholder="Add validator"
                value={existingValidator}
                onChange={handleChangeInput}
              >
                {Object.keys(validators)?.map((validator, index) => (
                  <Select.Option
                    key={`options-existing--Validator-${index}`}
                    value={validator}
                  >
                    {validator}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </>
        )}
      </Form.List>
      {/* <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  );
};

export default FormValidators;
