import { IStep } from "@/types/fireboltJSON";
import { Modal, Input, Select } from "antd";

import useStepModal from "./hook";

interface IModalStep {
  editingStep?: IStep;
  isModalVisible: boolean;
  onCloseModal(...args: any[]): void;
}

function ModalStep({ onCloseModal, isModalVisible, editingStep }: IModalStep) {
  const { Option } = Select;
  const { step, addNewStep, handleCancel, handleStepData, modalTitle } =
    useStepModal({
      onCloseModal,
      editingStep,
    });

  return (
    <Modal
      title={modalTitle}
      visible={isModalVisible}
      onOk={addNewStep}
      onCancel={handleCancel}
    >
      <div className="flex">
        <div className="label__input">
          <label>Slug</label>
          <Input
            placeholder="personal_data"
            value={step.step.slug}
            onChange={(e) => handleStepData("slug", e.currentTarget.value)}
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
