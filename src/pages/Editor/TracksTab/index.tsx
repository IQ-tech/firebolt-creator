import React, { useEffect, useState } from "react";
import { Layout, Menu, Divider } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import * as S from "./styles";
import Flow from "../../../components/Flow";

import * as M from "@/components/Flow/mocks/mockTracks";

const SidebarFlow = ({ setCurrentTrack, currentTrack }: any) => {
 
  const [optionsFlowA, setOptionsFlowA] = useState(M.optionsFlow);

  return (
    <div css={S.contentSidebarStyles}>
      <h2 css={S.sidebarTitleStyles}>Tracks list</h2>
      <Divider css={S.dividerStyles} />
      <Menu
        css={S.menuContentStyles}
        mode="vertical"
        expandIcon={<EllipsisOutlined />}
        defaultSelectedKeys={["default"]}
        //onSelect={(e) => console.log(e)}
      >
        {optionsFlowA.map((option, i) => (
          <Menu.Item
            key={option}
            icon={<FormOutlined />}
            //onClick={() => setCurrentTrack(M.mockTracks1)}
          >
            <span>
              {" "}
              {/* TODO: utilizar input  */}
              {option}
            </span>
            <EllipsisOutlined
              css={{ position: "absolute", left: "210px", top: "10px" }}
            />
          </Menu.Item>
        ))}

        <Menu.Item
          css={S.addLinkStyles}
          key="add"
          icon={<PlusOutlined />}
          onClick={() =>
            setOptionsFlowA([
              ...optionsFlowA,
              `Flow Tracks ${optionsFlowA.length + 1}`,
            ])
          }
        >
          {" "}
          Add
        </Menu.Item>
      </Menu>
    </div>
  );
};

const TracksTab = () => {
  const [currentTrack, setCurrentTrack] = useState(M.mockTracks);

  useEffect(() =>  window.scrollTo({ top: 9999, behavior: "smooth" }))

  return (
    <Layout css={S.contentStyles}>
      <SidebarFlow setCurrentTrack={setCurrentTrack} currentTrack={currentTrack} />
      <Flow currentTracks={currentTrack} />
    </Layout>
  );
};

export default TracksTab;
