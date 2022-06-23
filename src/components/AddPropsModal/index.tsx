import { useState } from "react";
import useAddPropsModal from "./hook";
import { DeleteOutlined } from "@ant-design/icons";
import { Modal, Button, Input, Table, Select, Tabs } from "antd";
import { IField, IStep } from "@/types/fireboltJSON";
import JSONEditor from "../JSONModal/components/JSONEditor";

interface IAddPropsModal {
  field: IField;
  visibleStep: IStep;
}

function AddPropsModal({ field, visibleStep }: IAddPropsModal) {
  const {
    isModalVisible,
    fieldProps,
    columns,
    showModal,
    handleOk,
    handleCancel,
    handlePropsData,
    addNewProp,
    deleteProp,
  } = useAddPropsModal({ field, visibleStep });

  let locale = {
    emptyText: ".",
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Config Props
      </Button>

      <Modal
        title={`${field.slug} - UI Props`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={850}
      >
        <div className="table-container">
          <Table
            locale={locale}
            dataSource={[]}
            columns={columns}
            pagination={false}
          />

          <div className="flex column lines">
            {fieldProps.map((field, index) => (
              <div
                css={{ height: "auto" }}
                className="table__line"
                key={`${index}-table`}
              >
                <div className="label__input">
                  <Input
                    value={field.propName}
                    onChange={(e) =>
                      handlePropsData(index, "propName", e.currentTarget.value)
                    }
                  />
                </div>

                <div className="label__input">
                  <Input
                    // value={"field?.conditional"}
                    value={"working in progress"}
                    disabled
                    // onChange={(e) => handlePropsData(index, "conditional", e.currentTarget.value)}
                  />
                </div>

                <div
                  className="label__input"
                  css={{
                    width: "82px",
                  }}
                >
                  <Select
                    css={{ width: "100%" }}
                    defaultValue={field.type}
                    onChange={(e) => handlePropsData(index, "type", e)}
                  >
                    <Select.Option value="Text">Text</Select.Option>
                    <Select.Option value="JSON">JSON</Select.Option>
                  </Select>
                </div>

                {field.type === "Text" ? (
                  <div className="label__input">
                    <Input
                      css={{
                        width: "230px",
                      }}
                      value={field.value}
                      onChange={(e) =>
                        handlePropsData(index, "value", e.currentTarget.value)
                      }
                    />
                  </div>
                ) : (
                  <div
                    css={{
                      width: "230px",
                      margin: "10px 0px",
                    }}
                  >
                    <JSONEditor
                      height="auto"
                      width="100%"
                      onChange={(e) => {
                     
                      // console.log("field >>>>",   JSON.parse(field.value)) 
                     
                          if(!e.error){
                          handlePropsData(index, "value", e.json)
                            }
                      }}
                    value={JSON.parse("{}")}
                    />
                  </div>
                )}

                <div
                  css={{
                    width: "80px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    css={{ marginRight: "15px" }}
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => deleteProp(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="button-container">
          <Button
            css={{ width: "100%", marginTop: "24px" }}
            type="dashed"
            onClick={addNewProp}
          >
            + Add props
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default AddPropsModal;
