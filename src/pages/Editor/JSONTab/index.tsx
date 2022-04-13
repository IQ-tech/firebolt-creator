import JsonView from "@/components/JsonView"
import JsonSettings from "@/components/JsonSettings"
import * as S from "./styles"


const JsonSchema = () => {
  return(
    <div css={S.contentStyles}>
      <JsonView />
      <JsonSettings />
    </div>
  )
}

export default JsonSchema