import { Card } from "antd"
import JSONInput from "react-json-editor-ajrm"
import locale from "react-json-editor-ajrm/locale/en"
import { data } from "@/pages/Editor/JSONTab/data"
import * as S from "./styles"

const JsonView = () => (
  <Card title="JSON representation" css={S.widthStyles}>
    <JSONInput
      id="json-editor"
      confirmGood={false}
      placeholder={data}
      theme="light_mitsuketa_tribute"
      locale={locale}
      height="700px"
      width="100%"
      viewOnly={true}
    />
  </Card>
)

export default JsonView