import { Modal, Table, Select, Tooltip } from "antd";
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
  const {
    filteredStepsList,
    selectStep,
    showConfirm,
    isValid,
    handleClose,
    selectedStep,
    error,
  } = useMoveFieldModal({
    stepsList,
    visibleStep,
    onClose,
    movingField,
  });
  return (
    <Modal
      title={movingField ? `Move field - ${movingField.slug}` : ""}
      visible={isVisible}
      okButtonProps={{ disabled: !isValid }}
      onCancel={handleClose}
      onOk={showConfirm}
    >
      <Table
        pagination={false}
        columns={[
          { title: "Field", dataIndex: "field", width: "35%" },
          {
            title: "To",
            dataIndex: "to",
            width: "25%",
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
            width: "40%",
            render: () => (
              <div
                css={{ width: "100%", height: "100%", position: "relative" }}
              >
                {error && (
                  <Tooltip title={error} defaultVisible placement="rightTop">
                    <div
                      css={{
                        inset: "0",
                        position: "absolute",
                        zIndex: "-1",
                      }}
                    />
                  </Tooltip>
                )}
                <Select
                  css={{ width: "100%" }}
                  status={error ? "error" : undefined}
                  value={selectedStep}
                  onChange={selectStep}
                >
                  {filteredStepsList.map((step, idx) => (
                    <Select.Option
                      key={`step-list-field-${idx}`}
                      value={step.step.slug}
                    >
                      {step.step.friendlyname}
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
