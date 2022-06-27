import { Form, Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { columns } from "./constants";

const Properties = ({ name, index }: { name: string; index: number }) => {
  return (
    <Form.List name={`properties-${index}`}>
      {(fields, { add, remove }) => {
        return (
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, curValues) =>
              prevValues?.validators?.properties !==
              curValues?.validators?.properties
            }
          >
            {() => (
              <>
                <Form.Item name={[name, "property"]}>
                  <Table
                    columns={columns}
                    dataSource={fields}
                    pagination={false}
                  />
                  {fields.map((field: any, index) => {
                    field.action = { fields, index, remove };
                  })}
                </Form.Item>
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={add}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add property
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.Item>
        );
      }}
    </Form.List>
  );
};

export default Properties;
