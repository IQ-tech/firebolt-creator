import { useNavigate, useLocation } from "react-router-dom";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";

const { confirm } = Modal;

export default function useEditor() {
  const { currentJSON, dispatch, startNewSession } = useFireboltJSON();
  const location = useLocation();
  const navigate = useNavigate();

  const tabsCallback = (path: string) => {
    window.scrollTo({ top: 9999, behavior: "smooth" });
    navigate(path);
  };

  function showConfirm() {
    confirm({
      title: "Do you want to start a new experience?",
      icon: <ExclamationCircleOutlined />,
      content: "This will permanently delete the current experience",
      onOk() {
        startNewSession();
      },
    });
  }

  return {
    location,
    navigate,
    tabsCallback,
    currentJSON,
    dispatch,
    startNewSession,
    showConfirm,
  };
}
