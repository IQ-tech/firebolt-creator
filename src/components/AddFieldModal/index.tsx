import useSlugInput from "@/hooks/useSlugInput";
import { IStep } from "@/types/fireboltJSON";
import { Modal, Input } from "antd";
import useAddFieldModal from "./hook";

interface IAddFieldModal {
  isOpen: boolean;
  onClose(...args: any[]): void;
  visibleStep: IStep;
}

const AddFieldModal = ({ isOpen, onClose, visibleStep }: IAddFieldModal) => {
  const {} = useAddFieldModal();
  const inputProps = useSlugInput();
  return (
    <Modal
      title={`Add new field to step: ${visibleStep?.step?.friendlyname}`}
      onCancel={onClose}
      visible={isOpen}
    >
      <p>Field slug:</p>
      <Input placeholder="personal_data" {...inputProps} />
    </Modal>
  );
};

export default AddFieldModal;
