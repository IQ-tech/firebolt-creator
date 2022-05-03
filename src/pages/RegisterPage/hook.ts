
import { useFireboltJSON } from "@/hooks/useFireboltJSON"
import { useNavigate  } from "react-router-dom";
import { IFireboltJSON } from '@/types/fireboltJSON';

export default function useRegisterPage(){
  const { dispatch } = useFireboltJSON()
  const navigate = useNavigate()

  function handleCreateForm(){
    dispatch({type: "START_BLANK"})
    navigate("/app/editor/main")
  }

  function handleUploadJSON(newJSON: IFireboltJSON){
    dispatch({type: "START_WITH_JSON", payload: newJSON})
    navigate("/app/editor/main")
  }

  return {
    handleCreateForm,
    handleUploadJSON
  }
}

