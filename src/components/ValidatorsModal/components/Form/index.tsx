import { Form, Select } from "antd";
import CollapseProperties from "../CollapseProperties";

import useFormValidators from "./hook";

export const FormValidators = ({ field, stepSlug }) => {
  const {
    onlyGoodValidators, // TODO: temp
    existingValidator,
    validatorAvailable,
    fieldsInit,

    form,
    handleChangeInput,
    onFinish,
  } = useFormValidators({ field, stepSlug });

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
                data={fieldsInit ? [...fields, ...fieldsInit] : fields}
                remove={remove}
                fieldSlug={field}
                stepSlug={stepSlug}
                validatorAvailable={validatorAvailable}
                existingValidator={existingValidator}
              />
            </Form.Item>

            <Form.Item>
               <p css={{marginTop: 15, textAlign: "center"}}>Quickly select validator</p>  
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
                {onlyGoodValidators?.map((validator, index) => (
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
