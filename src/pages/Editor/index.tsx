import { Outlet, useNavigate, useLocation } from "react-router-dom";
import BreadcrumbComponent from "@/components/Breadcrumb";
import {
  Layout,
  PageHeader,
  Button,
  Tabs,
  Dropdown,
} from "antd";
import {
  HomeOutlined,
  SisternodeOutlined,
  FileOutlined,
  EllipsisOutlined,
  DownloadOutlined
} from "@ant-design/icons";

import downloadJSONFile from '@/helpers/downloadJSON'

import * as S from "./styles";

const { TabPane } = Tabs;

const tabs = [
  { path: "/app/editor/main", label: "Main", Icon: HomeOutlined },
  { path: "/app/editor/tracks", label: "Tracks", Icon: SisternodeOutlined },
  { path: "/app/editor/jschema", label: "JSON schema", Icon: FileOutlined },
];

const EditorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const tabsCallback = (path: string) => navigate(path);

  const mockJSON =  [{
    id: 1,
    additionalId: {
      email: 'fake1@example.com',
      phone: '79000000001'
    },
    role: 'resident',
    secrets: {
      external: {},
      tempPass: '456456',
      constPass: '0eac67c42c5be76481dade3192495f3a',
      refreshKey: '{}'
    },
    token: null,
    phone: '79000000001',
    covidToken: null,
    isActive: true,
    isDelete: false,
    isQuarantine: false,
    quarantineExpiration: null,
    meta: {
      registration: {
        isFake: true,
        status: 'completed',
        tempPassExpTime: 0
      }
    },
    created: '2020-04-27T06:27:09.222Z',
    updated: '2020-04-27T06:27:09.222Z'
  },
  {
    id: 3,
    additionalId: {
      email: 'fake1@example.com',
      phone: '79000000001'
    },
    role: 'resident',
    secrets: {
      external: {},
      tempPass: '456456',
      constPass: '0eac67c42c5be76481dade3192495f3a',
      refreshKey: '{}'
    },
    token: null,
    phone: '79000000001',
    covidToken: null,
    isActive: true,
    isDelete: false,
    isQuarantine: false,
    quarantineExpiration: null,
    meta: {
      registration: {
        isFake: true,
        status: 'completed',
        tempPassExpTime: 0
      }
    },
    created: '2020-04-27T06:27:09.222Z',
    updated: '2020-04-27T06:27:09.222Z'
  }]

  return (
    <>
      <Layout className="layout" css={S.layoutStyles}>
          <BreadcrumbComponent />
          <PageHeader
            css={S.pageHeaderStyles}
            ghost={false}
            onBack={() => navigate("/")}
            title="My Form"
            subTitle="Form description"
            extra={
              <>
                <Button key="1" type="primary" onClick={() => downloadJSONFile(mockJSON, 'banco-pan')}>
                  <DownloadOutlined /> Export form JSON
                </Button>
              </>
            }
          >
            <Tabs activeKey={location.pathname} onTabClick={tabsCallback}>
              {tabs.map(({ path, Icon, label }) => (
                <TabPane
                  tab={
                    <span>
                      <Icon />
                      {label}
                    </span>
                  }
                  key={path}
                ></TabPane>
              ))}
            </Tabs>
          </PageHeader>
      </Layout>
      <Outlet />
    </>
  );
};

export default EditorPage;
