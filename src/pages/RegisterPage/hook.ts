import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import { useNavigate } from "react-router-dom";
import { IFireboltJSON } from "@/types/fireboltJSON";
import getCurrentYear from "@/helpers/getCurrentYear";
import { useState } from "react";

export default function useRegisterPage() {
  const { loadBlankJSON, loadUploadedJSON } = useFireboltJSON();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleCreateForm() {
    loadBlankJSON();
    navigate("/app/editor/main");
  }

  function handleUploadJSON(newJSON: IFireboltJSON) {
    loadUploadedJSON(newJSON);
    navigate("/app/editor/main");
  }

  function showModal() {
    setIsModalVisible(true);
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  return {
    handleCreateForm,
    handleUploadJSON,
    currentYear: getCurrentYear(),
    isModalVisible,
    showModal,
    hideModal,
  };
}
