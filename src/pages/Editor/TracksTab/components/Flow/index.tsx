import React, { useState, useRef, useCallback } from "react";
import { Card } from "antd";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from "react-flow-renderer";

import SideBarFlow from "./SideBarFlow";
import MiniMapFlow from "./MiniMapFlow"

import * as mockFlow from "../mocks/mockTracks";
import * as configsFlow from "../mocks/configsFlow";


let id = 0;
const getId = () => `dndnode_${id++}`;

const Flow = () => {
  const reactFlowWrapper: any = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(mockFlow.initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mockFlow.initialEdges);
  const [reactFlowInstance, setReactFlowInstance]: any = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
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
        id: getId(),
        type,
        position,
        style: {
          borderColor: `${
            type === "input" ? "#0041d0" : type === "output" ? "#ff0072" : null
          }`,
        },
        data: { label: stepCurrent },
        sourcePosition: "right",
        targetPosition: "left",
      };

      setNodes((nds: any[]) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <Card title="Default track" css={{ width: "100%" }}>
      <div
        css={{
          width: "100%",
          height: `${document.body.clientHeight / 1.45}px`,
          background: "#FFFFFF",
          flexDirection: "row",
          display: "flex",
          flexGrow: "1",
        }}
      >
        <ReactFlowProvider>
          <div css={{ flexGrow: "1" }} ref={reactFlowWrapper}>
            <ReactFlow
              defaultEdgeOptions={configsFlow.edgeOptions}
              connectionLineStyle={configsFlow.connectionLineStyle}
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

            </ReactFlow>
          </div>
          <SideBarFlow stepsTracks={mockFlow?.mockTracks?.steps} />
        </ReactFlowProvider>
      </div>
    </Card>
  );
};

export default Flow;
