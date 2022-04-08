import React, { useState, useRef, useCallback } from "react";
import { Card } from "antd";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  Background,
} from "react-flow-renderer";
import useFlow from "./hook";
import SideBarFlow from "./components/SideBarFlow";
import MiniMapFlow from "./components/MiniMapFlow";
import CustomLineConnection from './components/CustomLineConnection';
import * as C from "./configsFlow";
import * as M from "./mocks/mockTracks";
import * as S from "./styles";

const Flow = ({ currentTracks }: any) => {
  const {
    reactFlowWrapper,
    nodes,
    onNodesChange,
    edges,
    onEdgesChange,
    onConnect,
    setReactFlowInstance,
    onDrop,
    onDragOver,
    onSave,
    onRestore,
    onClean
  } = useFlow();

  return (
    <Card title={currentTracks?.slug} css={S.styleCard}>
      <div css={S.mainCard}>
        <div css={S.styleReactFlow} ref={reactFlowWrapper}>
          <ReactFlow
            defaultEdgeOptions={C!.edgeOptions}
            connectionLineStyle={C!.connectionLineStyle}
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
           connectionLineComponent={CustomLineConnection}
            fitView
          >
            <Controls />
            <Background color="#aaa" gap={10}  />
            <MiniMapFlow />

            <div css={S.controlsSave}>
              <button css={S.buttonsSRC} onClick={onSave}>
                Save
              </button>
              <button css={S.buttonsSRC} onClick={onRestore}>
                Restore
              </button>
              <button css={S.buttonsSRC} onClick={onClean}>
                Clean
              </button>
            </div>
          </ReactFlow>
        </div>
        <SideBarFlow stepsTracks={currentTracks?.steps} />
      </div>
    </Card>
  );
};

export default ({ currentTracks }) => (
  <ReactFlowProvider>
    <Flow currentTracks={currentTracks} />
  </ReactFlowProvider>
);
