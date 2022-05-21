import { Modal, Tree } from "antd";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import usePropsPresetModal from "./hook";
import { treeData, collections } from "./data";

interface IPropsPresetModal {
  visible: boolean;
  onClose: (...args: any[]) => void;
}

const Panel = ({ children }) => <div css={{ flex: "1" }}>{children}</div>;

const PropsPresetModal = ({ visible, onClose }: IPropsPresetModal) => {
  const { visiblePreset, handleSelectPreset, isDemoJsonEmpty, handleClose } =
    usePropsPresetModal({
      collections,
      onClose,
    });

  return (
    <Modal
      title="Props presets selector"
      visible={visible}
      width={800}
      onCancel={handleClose}
      okButtonProps={{ disabled: isDemoJsonEmpty }}
    >
      <div
        css={{ display: "flex", alignItems: "flex-start", minHeight: "300px" }}
      >
        <Panel>
          <Tree treeData={treeData} showIcon onSelect={handleSelectPreset} />
        </Panel>
        <Panel>
          {" "}
          <JSONInput
            id="json-editor"
            confirmGood={false}
            placeholder={visiblePreset}
            theme="light_mitsuketa_tribute"
            locale={locale}
            height="300px"
            width="100%"
            viewOnly
          />
        </Panel>
      </div>
    </Modal>
  );
};

export default PropsPresetModal;
