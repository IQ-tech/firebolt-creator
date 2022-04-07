import React, { useState } from 'react';
import { Layout, Menu, Divider } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import Flow from "../../../components/Flow";

import { mockTracks, mockTracks1 } from "@/components/Flow/mocks/mockTracks";

const { SubMenu } = Menu;

const Sidebar = ({setCurrentTrack}: any) => (
  <div css={S.contentSidebarStyles}>
    <h2 css={S.sidebarTitleStyles}>Tracks list</h2>
    <Divider css={S.dividerStyles} />
    <Menu
      css={S.menuContentStyles}
      mode="vertical"
      expandIcon={<EllipsisOutlined />}
    >
      <SubMenu
        key="Default"
        icon={<FormOutlined />}
        title="Default"
        onTitleClick={() => setCurrentTrack(mockTracks)}
      />
      <SubMenu
        key="Alternative"
        icon={<FormOutlined />}
        title="Alternative"
        onTitleClick={() => setCurrentTrack(mockTracks1)}
      />
      <Menu.Item
        css={S.addLinkStyles}
        key="add"
        icon={<PlusOutlined />}
        onClick={() => alert("Add")}
      >
        {" "}
        Add
      </Menu.Item>
    </Menu>
  </div>
);

const TracksTab = () => {
  const [ currentTrack, setCurrentTrack ] = useState(mockTracks);

  return (
    <Layout css={S.contentStyles}>
      <Sidebar setCurrentTrack={setCurrentTrack}/>
      <Flow currentTracks={currentTrack}/>
    </Layout>
  );
};

export default TracksTab;
