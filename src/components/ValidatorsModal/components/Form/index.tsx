import { Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import CollapseProperties from '../CollapseProperties';

export const FormValidators = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
   // console.log('Received values of form:', values);
  };

  return (
    <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="validators">
        {( fields, { add, remove } ) => (
			    <>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, curValues) => {
                return prevValues.validators !== curValues.validators
              }}
            >
              <CollapseProperties data={fields} remove={remove} />
            </Form.Item>

            <Form.Item>
              <Button css={{border: '1px solid #d9d9d9'}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add validator
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormValidators

