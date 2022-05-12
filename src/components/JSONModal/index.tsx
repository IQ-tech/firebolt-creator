import { Modal, Tabs } from "antd";
import Error from "./components/Error";
import JSONEditor from "./components/JSONEditor";
import Upload from "./components/Upload";
import { IFireboltJSON } from "@/types/fireboltJSON";
import useJSONModal from "./hook";

const { TabPane } = Tabs;

interface JSONModalProps {
  isModalOpen: boolean;
  onCloseModal(...args: any[]): void;
  onUploadJSON(addedJSON: IFireboltJSON): void;
}

function JSONModal({
  onUploadJSON,
  onCloseModal,
  isModalOpen,
}: JSONModalProps) {
  const {
    disableButton,
    jsonError,
    handleCancel,
    handleUpload,
    handleTabChange,
    handleEditor,
    handleOk,
  } = useJSONModal({
    onCloseModal,
    onUploadJSON,
  });

  return (
    <Modal
      title="Load Firebolt JSON"
      okButtonProps={{ disabled: disableButton }}
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Tabs defaultActiveKey="2" onChange={handleTabChange}>
        <TabPane tab="Paste JSON" key="paste">
          {jsonError && <Error message={jsonError} />}
          <JSONEditor onChange={handleEditor} />
        </TabPane>
        <TabPane tab="Load file" key="load">
          {jsonError && <Error message={jsonError} />}
          <Upload onChange={handleUpload} />
        </TabPane>
      </Tabs>
    </Modal>
  );
}

export default JSONModal;
