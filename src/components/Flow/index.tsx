import { Card } from "antd";
import { css } from "@emotion/react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  Background,
} from "react-flow-renderer";
import useFlow from "./hook";
import SideBarFlow from "./components/SideBarFlow";
import MiniMapFlow from "./components/MiniMapFlow";
import CustomLineConnection from "./components/CustomLineConnection";
import * as C from "./configsFlow";

export const buttonsSRCStyle = css({
  marginLeft: "10px",
  padding: "3px 5px",
  cursor: "pointer",
});

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
    onClean,
  } = useFlow();

  return (
    <Card title={currentTracks?.slug} css={{ width: "100%" }}>
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
        <div css={{ flexGrow: "1" }} ref={reactFlowWrapper}>
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
            <Background color="#aaa" gap={10} />
            <MiniMapFlow />

            <div
              css={{
                position: "absolute",
                right: "10px",
                top: "10px",
                zIndex: 4,
                fontSize: "12px",
              }}
            >
              <button css={buttonsSRCStyle} onClick={onSave}>
                Save
              </button>
              <button css={buttonsSRCStyle} onClick={onRestore}>
                Restore
              </button>
              <button css={buttonsSRCStyle} onClick={onClean}>
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
