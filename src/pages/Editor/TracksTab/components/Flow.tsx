import React, { useState, useRef, useCallback } from "react";
import { Card } from "antd";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from "react-flow-renderer";

import * as mockFlow from "./mockTracks";
import * as configsFlow from "./configsFlow";





const SideBarFlow = () => {


  const onDragStart = (event: any, nodeType: string) => {
    console.log(event.target.innerHTML, nodeType)
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const dndnode = {
    height: "28px",
    padding: "4px",
    border: "1px solid #1a192b",
    borderRadius: "2px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "grab",
  };

  return (
    <aside
      css={{
        maxWidth: "250px",
        borderRight: "1px solid #eee",
        padding: "15px 10px",
        fontSize: "12px",
        background: "#fcfcfc",
      }}
    >
      <h2 css={{ fontSize: "12px", fontWeight: 700 }}>
        You can chose any of the available steps
      </h2>
      {mockFlow.mockTracks.steps.map((step, i) => {
        console.log(step,i)
      })}
       <div
        css={[dndnode, { borderColor: "#0041d0" }]}
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Basic data
      </div>

      {/* <div
        css={[dndnode, { borderColor: "#0041d0" }]}
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Basic data
      </div>
      <div
        css={[dndnode]}
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Extra data
      </div>
      <div
        css={[dndnode, { borderColor: "#ff0072" }]}
        onDragStart={(event) =>{
         // console.log(event)
           onDragStart(event, "output")}
          }
        draggable
      >
        Address
      </div> */}
    </aside>
  );
};



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
    console.log("........",event.target.innerHTML)
   // console.log("....MOVE....",event.currentTarget)
    event.dataTransfer
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      console.log("........",event.target.innerHTML)

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

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
        data: { label: `${type} node` },
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
              // defaultNodes={defaultNodes}
              // defaultEdges={defaultEdges}
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
              <MiniMap
                nodeStrokeColor={(n: any) => {
                  if (n.style?.background) return n.style.background;
                  if (n.type === "input") return "#0041d0";
                  if (n.type === "output") return "#ff0072";
                  if (n.type === "default") return "#1a192b";

                  return "#eee";
                }}
                nodeColor={(n: any) => {
                  if (n.style?.background) return n.style.background;

                  return "#fff";
                }}
                nodeBorderRadius={2}
              />
            </ReactFlow>
          </div>
          <SideBarFlow />
        </ReactFlowProvider>
      </div>
    </Card>
  );
};

export default Flow;
