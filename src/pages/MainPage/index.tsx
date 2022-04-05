import { Layout, Menu, Collapse, Card, Divider, Input, Space, Switch, Button, Select } from 'antd'
import {  FormOutlined, PlusOutlined, ZoomInOutlined  } from '@ant-design/icons';

import * as S from './styles'

const { SubMenu } = Menu;
const { Panel } = Collapse;
const { Option } = Select;

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
      <Menu.Item css={S.addLinkStyles} key="add" icon={<PlusOutlined />}>Add</Menu.Item>
    </Menu>
  </div>
)

const MainContent = () => (
  <Card title="Step fields">
    <Collapse defaultActiveKey={['1']} css={S.collapseContentStyles}>
      <Panel header="Email" key="1">
        <Space size="large" direction="vertical" css={S.widthStyles}>
          <Space css={S.widthStyles}>
            <Space direction="vertical" css={S.inputContentStyles}>
              <span>Slug</span>
              <Input placeholder="Email"/>
            </Space>
            <Space direction="vertical" css={{width: "279px"}}>
              <span>Conditional</span>
              <Input placeholder="step.something === true"/>
            </Space>
          </Space>
          <Space direction="vertical" css={S.widthStyles}>
            <span>Widget</span>
            <Input placeholder="text"/>
          </Space>
          <Space direction="vertical" css={S.widthStyles}>
            <span>Props preset</span>
            <Input placeholder="cep or br-addons:cep"/>
          </Space>
          <Space>
            <span>Half size</span>
            <Switch defaultChecked/>
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
          <Input placeholder="password"/>
        </Space>
      </Panel>
      <Panel header="Confirm password" key="3">
        <Space direction="vertical" css={S.widthStyles}>
          <span>Confirm password</span>
          <Input placeholder="Confirm password"/>
        </Space>
      </Panel>
    </Collapse>
  </Card>
)

const Preview = () => (
  <div css={{paddingLeft: "19px"}}>
    <Card 
      css={{width: "470px"}} 
      title="Preview" 
      extra={
        <Select placeholder="Theme">
          <Option value="theme">Theme</Option>
        </Select>
      }>
    </Card>
  </div>
)

const MainPage = () => {
  return (
    <Layout css={S.contentStyles}> 
      <Sidebar />
      <MainContent />
      <Preview />
    </Layout>
  )
}

export default MainPage