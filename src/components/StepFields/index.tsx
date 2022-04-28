import { Card, Collapse, Space, Input, Select, Switch, Button } from "antd";
import { ZoomInOutlined, DeleteOutlined } from "@ant-design/icons";
import * as S from "./styles";

const { Panel } = Collapse;
const { Option } = Select;

const widgetOptions = ["Text", "Select", "Radio", "Checkbox"]
const presetsOptions = ["cep or br-addons:cep", "option 2"]

function deleteForm(e) {
  e.stopPropagation()
 // console.log('click')
}

const StepFields = () => (
  <Card title="Step fields" css={S.contentStyles}>
    <Collapse defaultActiveKey={["1"]} css={S.widthStyles}>
      <Panel header="Email" key="1" extra={
        <button css={S.deleteButton} onClick={deleteForm}><DeleteOutlined /></button>
      }>
        <Space size="large" direction="vertical" css={S.widthStyles}>
          <div css={S.emailInputContent}>
            <div css={S.emailInput}>
              <span>Slug</span>
              <Input placeholder="Email" />
            </div>
            <div css={S.emailInput}>
              <span>Conditional</span>
              <Input placeholder="step.something === true" />
            </div>
          </div>
          <Space direction="vertical" css={S.widthStyles}>
            <span>Widget</span>
            <Select
              css={S.widthStyles}
              placeholder="Please select"
            >
              {widgetOptions.map((option, index) => 
                <Option key={index} value={option}>{option}</Option>
              )}
            </Select>
          </Space>
          <Space direction="vertical" css={S.widthStyles}>
            <span>Props preset</span>
            <Select
              css={S.widthStyles}
              placeholder={presetsOptions[0]}
            >
              {presetsOptions.map((option, index) => 
                <Option key={index} value={option}>{option}</Option>
              )}
            </Select>
          </Space>
          <Space>
            <span>Half size</span>
            <Switch defaultChecked />
          </Space>
          <Space>
            <span>UI props</span>
            <Button type="primary">
              <ZoomInOutlined />
              Open ui props config
            </Button>
          </Space>
          <Space>
            <span>Validators</span>
            <Button type="primary">
              <ZoomInOutlined />
              Open validators config
            </Button>
          </Space>
        </Space>
      </Panel>
      <Panel header="Password" key="2">
        <Space direction="vertical" css={S.widthStyles}>
          <span>Password</span>
          <Input placeholder="password" />
        </Space>
      </Panel>
      <Panel header="Confirm password" key="3">
        <Space direction="vertical" css={S.widthStyles}>
          <span>Confirm password</span>
          <Input placeholder="Confirm password" />
        </Space>
      </Panel>
    </Collapse>
  </Card>
);

export default StepFields