import React, { useState, useRef, useCallback } from "react";
import { Card } from "antd";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  useReactFlow,
} from "react-flow-renderer";
import "./index.css";

import SideBarFlow from "./components/SideBarFlow";
import MiniMapFlow from "./components/MiniMapFlow";

import * as S from "./styles";
import * as mockFlow from "./mocks/mockTracks";
import * as configsFlow from "./configsFlow";

const flowKey = "currentTracks";

const Flow = ({ currentTracks }: any) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(mockFlow.initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mockFlow.initialEdges);
  const [reactFlowInstance, setReactFlowInstance]: any = useState(null);
  const reactFlowWrapper: any = useRef(null);

  const { setViewport } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer;
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("nodeType");
      const stepCurrent = event.dataTransfer.getData("stepCurrent");

      if (typeof type === "undefined" || !type) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: stepCurrent,
        type,
        position,
        data: { label: stepCurrent },
        sourcePosition: "right",
        targetPosition: "left",
      };

      setNodes((nds: any[]) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onSave = useCallback(() => {
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [reactFlowInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey) as any);

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  return (
    <Card title={currentTracks?.slug} css={S.styleCard}>
      <div css={S.mainCard}>
        <div css={S.styleReactFlow} ref={reactFlowWrapper}>
          <ReactFlow
            defaultEdgeOptions={configsFlow!.edgeOptions}
            connectionLineStyle={configsFlow!.connectionLineStyle}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
            <Background color="#aaa" gap={10} />
            <MiniMapFlow />

            <div css={S.controlsSave}>
              <button css={S.buttonsSaveRestore} onClick={onSave}>Save</button>
              <button css={S.buttonsSaveRestore} onClick={onRestore}>Restore</button>
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
