import { useFireboltJSON } from "@/hooks/useFireboltJSON";

const useJSONTabs = () => {
  const { currentJSON, dispatch } = useFireboltJSON();
  return {
    currentJSON,
    dispatch
  }
}

export default useJSONTabs