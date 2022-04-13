import { Space, Card, Input, Select, Button  } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import * as S from "./styles"

const { Option } = Select

const plugins = ["br-addons", "us-addons", "pluggin-4", "pluggin-5", "pluggin-6"]

const JsonSettings = () => (
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
            css={S.widthStyles}
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
)

export default JsonSettings