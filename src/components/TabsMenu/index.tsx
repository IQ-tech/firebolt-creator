import { Menu } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export const tabsMenu = (
    <Menu>
      <Menu.Item key="1" icon={<DownloadOutlined />}>
        <a
          rel="noopener noreferrer"
          href="/"
        >
          Export form JSON
        </a>
      </Menu.Item>
    </Menu>
);