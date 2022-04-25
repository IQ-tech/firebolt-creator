import { useNavigate, useLocation } from "react-router-dom";

export default function useEditor() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabsCallback = (path: string) => {
    window.scrollTo({ top: 9999, behavior: "smooth" })
    navigate(path)
  };

  return { location, navigate, tabsCallback };
}
