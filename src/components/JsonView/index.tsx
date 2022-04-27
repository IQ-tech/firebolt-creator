import { Card } from "antd"
import JSONInput from "react-json-editor-ajrm"
import locale from "react-json-editor-ajrm/locale/en"
import { data } from "@/pages/Editor/JSONTab/data"

interface IJsonView {
  readOnly?: boolean
}

const JsonView = ({readOnly = true} : IJsonView) => (
  <Card title="JSON representation" css={{ width: "700px" }}>
    <JSONInput
      id="json-editor"
      confirmGood={false}
      placeholder={data}
      theme="light_mitsuketa_tribute"
      locale={locale}
      height="700px"
      width="100%"
      viewOnly={readOnly}
    />
  </Card>
)

export default JsonView