import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import { useNavigate } from "react-router-dom";
import { IFireboltJSON } from "@/types/fireboltJSON";
import getCurrentYear from "@/helpers/getCurrentYear";
import { useState } from "react";

export default function useRegisterPage() {
  const { dispatch } = useFireboltJSON();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleCreateForm() {
    dispatch({ type: "START_BLANK" });
    navigate("/app/editor/main");
  }

  function handleUploadJSON(newJSON: IFireboltJSON) {
    dispatch({ type: "START_WITH_JSON", payload: newJSON });
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
