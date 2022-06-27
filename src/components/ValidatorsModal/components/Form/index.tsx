import { Form, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import CollapseProperties from "../CollapseProperties";

export const FormValidators = ({ field }) => {
  const valueInit = field.reduce(
    (acc, cur, index) => [
      ...acc,
      {
        name: cur.type,
        key: 100 + index,
        isListField: true,
        fieldKey: 100 + index,
      },
    ],
    []
  );

  // console.log(
  //   "🚀 ~ file: index.tsx ~ line 7 ~ FormValidators ~ field",
  //   ...valueInit
  // );
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    //console.log('Received values of form:', values);
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
            {/* {console.log(
              "🚀 ~ file: index.tsx ~ line 20 ~ FormValidators ~ fields",
              fields
            )} */}

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
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                css={{ border: "1px solid #d9d9d9" }}
                icon={<PlusOutlined />}
              >
                Add validator
              </Button>
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
