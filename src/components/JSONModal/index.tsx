import { Button } from "antd";

import ModalContent from "./components/ModalContent";
import useJSONModal from "./hook";
import * as S from "./styles";

function JSONModal() {
  const modalProps = useJSONModal();
  const { showModal } = modalProps;

  return (
    <>
      <Button
        css={{ width: "172px" }}
        type="link"
        size="large"
        onClick={showModal}
      >
        Load JSON Schema
      </Button> paranaue

      <ModalContent {...modalProps} />
    </>
  );
}

export default JSONModal;
