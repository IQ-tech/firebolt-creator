import { Layout, Menu, Card, Divider } from "antd";
import { FormOutlined, PlusOutlined, EllipsisOutlined} from "@ant-design/icons";
import * as S from "./styles";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';

import { nodes as initialNodes, edges as initialEdges } from './mockTracks';

const onInit = (reactFlowInstance: any) => console.log('flow loaded:', reactFlowInstance);

const { SubMenu } = Menu;

const Sidebar = () => (
  <div css={S.contentSidebarStyles}>
    <p css={S.sidebarTitleStyles}>Tracks list</p>
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
      <Menu.Item css={S.addLinkStyles} key="add" icon={<PlusOutlined />} onClick={() => alert("Add")}> Add</Menu.Item>
    </Menu>
  </div>
);

const MainContent = () =>{ 
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));
  console.log(window.innerHeight)
  return(
  <Card title="Default track" css={{ width: "100%"}}>
     <ReactFlow
      css={{ width: "100%", height: `${window.innerHeight/2.2}px`  }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
    >
      <MiniMap
        nodeStrokeColor={(n: any) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';

          return '#eee';
        }}
        nodeColor={(n: any) => {
          if (n.style?.background) return n.style.background;

          return '#fff';
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  </Card>
);
}

const TracksPage = () => {
  return (
    <Layout css={S.contentStyles}>
      <Sidebar />
      <MainContent />
    </Layout>
  );
};

export default TracksPage;
