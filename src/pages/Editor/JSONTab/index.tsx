import { Space, Card, Input, Select, Button  } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import { data } from "./data";
import * as S from "./styles"

const { Option } = Select;

const plugins = ["br-addons", "us-addons", "pluggin-4", "pluggin-5", "pluggin-6"]

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
);

const Settings = () => (
  <Card title="Settings" css={S.widthStyles}>
    <div css={S.settingsContent}>
      <Space direction="vertical" css={S.widthStyles}>
        <span>Schema version</span>
        <Input defaultValue="1.0.0" css={S.textInputsStyles}/>
      </Space>
      <Space direction="vertical" css={S.widthStyles}>
        <span>Form version</span>
        <Input defaultValue="1.0.0" css={S.textInputsStyles}/>
      </Space>
      <Space direction="vertical" css={S.widthStyles}>
        <span>Description</span>
        <Input defaultValue="Short description" css={S.textInputsStyles}/>
      </Space>
      <Space direction="vertical" css={S.widthStyles}>
        <span>Plugins</span>
        <div>
          <Select
            mode="multiple"
            style={S.widthStyles}
            placeholder="Please select"
            defaultValue={["br-addons", "us-addons"]}
          >
            {plugins.map((option, index) => 
              <Option key={index} value={option}>{option}</Option>
            )}
          </Select>
        </div>
      </Space>
      <Space>
        <span>Webhook config</span>
        <Button type="primary" icon={<SearchOutlined />}>
        Open webhook configs
        </Button>
      </Space>
    </div>

  </Card>
);

const JsonSchema = () => {

  return(
    <div css={S.contentStyles}>
      <JsonView />
      <Settings />
    </div>
  )
}

export default JsonSchema