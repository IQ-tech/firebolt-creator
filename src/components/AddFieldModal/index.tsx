import { Modal } from "antd";
import { IStep } from "@/types/fireboltJSON";
import InputWithErrorMessage from "../InputWithErrorMessage";
import useAddFieldModal from "./hook";

interface IAddFieldModal {
  isOpen: boolean;
  onClose(...args: any[]): void;
  visibleStep: IStep;
}

const AddFieldModal = ({ isOpen, onClose, visibleStep }: IAddFieldModal) => {
  const {
    status,
    value: inputValue,
    onChange,
    errorMessage,
    isValid,
    addStep,
    handleClose,
  } = useAddFieldModal({ visibleStep, onClose });

  return (
    <Modal
      title={`Add new field to step: ${visibleStep?.step?.friendlyname}`}
      onCancel={handleClose}
      okButtonProps={{ disabled: !isValid }}
      visible={isOpen}
      onOk={addStep}
    >
      <p>Field slug:</p>
      <InputWithErrorMessage
        errorMessage={errorMessage}
        placeholder="personal_data"
        status={status}
        value={inputValue}
        onChange={onChange}
      />
    </Modal>
  );
};

export default AddFieldModal;
