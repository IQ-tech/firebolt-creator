import { useNavigate, useLocation } from "react-router-dom";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

export default function useEditor() {
  const { currentJSON, dispatch, startNewSession } = useFireboltJSON();
  const location = useLocation();
  const navigate = useNavigate();

  const tabsCallback = (path: string) => {
    window.scrollTo({ top: 9999, behavior: "smooth" });
    navigate(path);
  };

  return {
    location,
    navigate,
    tabsCallback,
    currentJSON,
    dispatch,
    startNewSession,
  };
}
