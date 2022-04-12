import {
  Layout,
  Menu,
  Collapse,
  Card,
  Divider,
  Input,
  Space,
  Switch,
  Button,
  Select,
} from "antd";
import { FormOutlined, PlusOutlined, ZoomInOutlined, DeleteOutlined } from "@ant-design/icons";
import { FireboltForm } from "@iq-firebolt/client";
import BlueberryTheme from "@iq-firebolt/blueberry-theme" ;
import { mockFields } from "./mock";
import * as S from "./styles";

// import StepModal from '@/components/StepModal';
// import AddPropsModal from '@/components/AddPropsModal';

// <StepModal />

// <AddPropsModal />

const { SubMenu } = Menu;
const { Panel } = Collapse;
const { Option } = Select;

const widgetOptions = ["Text", "Select", "Radio", "Checkbox"]
const presetsOptions = ["cep or br-addons:cep", "option 2"]

function deleteForm(e) {
  e.stopPropagation()
  console.log('click')
}

const Sidebar = () => (
  <div css={S.contentSidebarStyles}>
    <p css={S.sidebarTitleStyles}>Steps</p>
    <Divider css={S.dividerStyles} />
    <Menu css={S.menuContentStyles} mode="vertical">
      <SubMenu key="basic-infos" icon={<FormOutlined />} title="Basic info">
        <Menu.Item key="sub1-rename">Rename</Menu.Item>
        <Menu.Item key="sub1-remove">Remove</Menu.Item>
        <Menu.Item key="sub1-edit">Edit</Menu.Item>
      </SubMenu>
      <SubMenu key="extra-infos" icon={<FormOutlined />} title="Extra infos">
        <Menu.Item key="sub2-rename">Rename</Menu.Item>
        <Menu.Item key="sub2-remove">Remove</Menu.Item>
        <Menu.Item key="sub2-edit">Edit</Menu.Item>
      </SubMenu>
      <SubMenu key="adress" icon={<FormOutlined />} title="Adress">
        <Menu.Item key="sub3-rename">Rename</Menu.Item>
        <Menu.Item key="sub3-remove">Remove</Menu.Item>
        <Menu.Item key="sub3-edit">Edit</Menu.Item>
      </SubMenu>
      <Menu.Item css={S.addLinkStyles} key="add" icon={<PlusOutlined />}>
        Add
      </Menu.Item>
    </Menu>
  </div>
);

const MainContent = () => (
  <Card title="Step fields" css={{ width: "60%" }}>
    <Collapse defaultActiveKey={["1"]} css={S.collapseContentStyles}>
      <Panel header="Email" key="1" extra={
        <button css={{background: "none", border: "none"}} onClick={deleteForm}><DeleteOutlined /></button>
      }>
        <Space size="large" direction="vertical" css={S.widthStyles}>
          <div css={{ width: "100%", gap: "16px", display: "flex" }}>
            <div css={{ width: "49%", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>Slug</span>
              <Input placeholder="Email" />
            </div>

            <div css={{ width: "49%", display: "flex", flexDirection: "column", gap: "8px" }}>
              <span>Conditional</span>
              <Input placeholder="step.something === true" />
            </div>
          </div>
          <Space direction="vertical" css={S.widthStyles}>
            <span>Widget</span>
            <Select
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
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

const Preview = () => (
  <div css={{ paddingLeft: "19px", width: "40%" }}>
    <Card
      css={{ height: "100%" }}
      title="Preview"
      extra={
        <Select placeholder="Theme">
          <Option value="theme">Theme</Option>
        </Select>
      }
    >
      <FireboltForm theme={BlueberryTheme} schema={mockFields as any} />
    </Card>
  </div>
);

const MainPage = () => {
  return (
    <Layout css={S.contentStyles}>
      <Sidebar />
      <MainContent />
      <Preview />
    </Layout>
  );
};

export default MainPage;
