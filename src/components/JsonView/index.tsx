import { Card } from "antd"
import JSONInput from "react-json-editor-ajrm"
import locale from "react-json-editor-ajrm/locale/en"
import { IFireboltJSON } from "@/types/fireboltJSON";

interface IJsonView {
  readOnly?: boolean
  currentJSON?: IFireboltJSON
}

const JsonView = ({readOnly = true, currentJSON} : IJsonView) =>{ 

  return(
  <Card title={currentJSON?.name} css={{ flex: "0 0 45%" }}>
    <JSONInput
      id="json-editor"
      confirmGood={false}
      placeholder={currentJSON}
      theme="light_mitsuketa_tribute"
      locale={locale}
      height="700px"
      width="100%"
      viewOnly={readOnly}
    />
  </Card>
)
}

export default JsonView