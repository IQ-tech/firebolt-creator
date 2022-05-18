import { IStep } from "@/types/fireboltJSON";
import { Modal, Input, Select } from "antd";
import InputWithErrorMessage from "../InputWithErrorMessage";
import useStepModal from "./hook";

interface IModalStep {
  editingStep?: IStep;
  isModalVisible: boolean;
  onCloseModal(...args: any[]): void;
}

function ModalStep({ onCloseModal, isModalVisible, editingStep }: IModalStep) {
  const { Option } = Select;
  const {
    status,
    value: inputValue,
    onChange,
    errorMessage,
    isValid,

    step,
    addNewStep,
    handleCancel,
    handleStepData,
    modalTitle,
  } = useStepModal({
    onCloseModal,
    editingStep,
  });

  return (
    <Modal
      title={modalTitle}
      visible={isModalVisible}
      okButtonProps={{ disabled: !isValid }}
      onOk={addNewStep}
      onCancel={handleCancel}
    >
      <div className="flex">
        <div className="label__input">
          <label><span css={{color: "red", fontWeight: 600,
    fontSize: "14px",
    lineHeight: "22px"}}>*</span> Slug</label>
          <InputWithErrorMessage
            errorMessage={errorMessage}
            placeholder="personal_data"
            status={status}
            value={inputValue}
            onChange={onChange}
          />
        </div>

        <div className="label__input">
          <label>Friendly Name</label>
          
          <Input
            placeholder="Personal data"
            value={step.step.friendlyname}
            onChange={(e) =>
              handleStepData("friendlyname", e.currentTarget.value)
            }
          />
        </div>
      </div>

      <div className="column label__select">
        <label>Type</label>
        <Select
          style={{ width: "100%" }}
          value={step.step.type}
          onSelect={(value: string) => handleStepData("type", value)}
        >
          <Option value="form">Form</Option>
          <Option value="custom">Custom</Option>
        </Select>
      </div>
    </Modal>
  );
}

export default ModalStep;
