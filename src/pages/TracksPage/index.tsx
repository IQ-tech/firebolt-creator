import { Layout, Menu, Card, Divider } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import * as S from "./styles";

import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from "react-flow-renderer";

const SideBarFlow = () => {
  const onDragStart = (event: any, nodeType: string) => {
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
      <div
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
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Address
      </div>
    </aside>
  );
};

const { SubMenu } = Menu;

const Sidebar = () => (
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
        onTitleClick={() => alert("Default")}
      />
      <SubMenu
        key="Alternative"
        icon={<FormOutlined />}
        title="Alternative"
        onTitleClick={() => alert("Alternative")}
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

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Basic data" },
    position: { x: 200, y: -25 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "default" },
    position: { x: 250, y: 45 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "output" },
    position: { x: 280, y: 165 },
  },
];

const initialEdges = [
  { id: '1', source: '1', target: '2' },
  { id: '2', source: '2', target: '3' },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const MainContent = () => {
  const reactFlowWrapper: any = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance]: any = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <Card title="Default track" css={{ width: "100%" }}>
      <div
        css={{
          width: "100%",
          height: `${document.body.clientHeight / 2.2}px`,
          background: "#FFFFFF",
          flexDirection: "row",
          display: "flex",
          flexGrow: "1",
        }}
      >
        <ReactFlowProvider>
          <div css={{ flexGrow: "1" }} ref={reactFlowWrapper}>
            <ReactFlow
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

const TracksPage = () => {
  return (
    <Layout css={S.contentStyles}>
      <Sidebar />
      <MainContent />
    </Layout>
  );
};

export default TracksPage;
