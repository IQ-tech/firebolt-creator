import { Modal, Table, Select } from "antd";
import { SwapRightOutlined } from "@ant-design/icons";
import { IField, IStep } from "@/types/fireboltJSON";
import useMoveFieldModal from "./hook";

interface IMoveFieldModal {
  isVisible: boolean;
  onClose(): void;
  movingField?: IField;
  stepsList: IStep[];
  visibleStep: IStep;
}

const MoveFieldModal = ({
  isVisible,
  onClose,
  movingField,
  stepsList,
  visibleStep,
}: IMoveFieldModal) => {
  const { filteredStepsList, selectedStep } = useMoveFieldModal({ stepsList });
  return (
    <Modal
      title={movingField ? `Move field - ${movingField.slug}` : ""}
      visible={isVisible}
      okButtonProps={{ disabled: !selectedStep }}
      onCancel={onClose}
    >
      <Table
        pagination={false}
        columns={[
          { title: "Field", dataIndex: "field", width: "35%" },
          {
            title: "To",
            dataIndex: "to",
            width: "30%",
            render: () => (
              <div
                css={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SwapRightOutlined style={{ fontSize: "30px" }} />
              </div>
            ),
          },
          {
            title: "Step",
            dataIndex: "step",
            width: "35%",
            render: () => (
              <div css={{ width: "100%", height: "100%" }}>
                <Select
                  css={{ width: "100%" }}
                  defaultValue={visibleStep.step.slug}
                >
                  {filteredStepsList.map((step, idx) => (
                    <Select.Option
                      key={`step-list-field-${idx}`}
                      value={step.step.slug}
                    >
                      {step.step.slug}
                    </Select.Option>
                  ))}
                </Select>
              </div>
            ),
          },
        ]}
        dataSource={[
          {
            key: "1",
            field: movingField?.slug,
          },
        ]}
      ></Table>
    </Modal>
  );
};

export default MoveFieldModal;
