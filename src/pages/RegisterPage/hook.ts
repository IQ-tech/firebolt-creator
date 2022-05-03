
import { useFireboltJSON } from "@/hooks/useFireboltJSON"
import { useNavigate  } from "react-router-dom";

export default function useRegisterPage(){
  const {  dispatch } = useFireboltJSON()
  const navigate = useNavigate()

  function handleCreateForm(){
    dispatch({type: "START_BLANK"})
    navigate("/app/editor/main")
  }

  return {
    handleCreateForm
  }
}

