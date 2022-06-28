import { Card } from "antd";
import { css } from "@emotion/react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  Background,
} from "react-flow-renderer";
import useFlow from "./hook";
import Sidebar from "./components/Sidebar";
import MiniMap from "./components/MiniMap";
import CustomLineConnection from "./components/CustomLineConnection";
import * as C from "./configsFlow";

import { IFlow, IStep } from "@/types/fireboltJSON";

export const buttonsSRCStyle = css({
  marginLeft: "10px",
  padding: "3px 5px",
  cursor: "pointer",
});

export interface IFlowProps {
  visibleFlow: IFlow;
  steps: IStep[];
}

const Flow = ({ visibleFlow, steps }: IFlowProps) => {
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
    onClean,
    removeNodeToClick
  } = useFlow({ visibleFlow, steps });

  return (
    <Card title={visibleFlow.slug} css={{ width: "100%" }}>
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
        <div css={{ flexGrow: "1" }} ref={reactFlowWrapper} onContextMenu={e => e.preventDefault()}>
          <ReactFlow
            defaultEdgeOptions={C!.edgeOptions}
            defaultZoom={1}
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
            onMouseDown={removeNodeToClick} //TODO: bug second step
          >
            <Controls
              css={{
                width: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "button": {
                  width: "40px",
                  height: "35px"
                }
              }}
            />
            <Background color="#aaa" gap={10} />
            <MiniMap />

            <div
              css={{
                position: "absolute",
                right: "10px",
                top: "10px",
                zIndex: 4,
                fontSize: "12px",
              }}
            >
              <button css={buttonsSRCStyle} onClick={onClean}>
                Clean
              </button>
            </div>
          </ReactFlow>
        </div>
        <Sidebar steps={steps} visibleFlow={visibleFlow} />
      </div>
    </Card>
  );
};

export default ({
  visibleFlow,
  steps,
}: {
  visibleFlow: IFlow;
  steps: IStep[];
}) => (
  <ReactFlowProvider>
    <Flow steps={steps} visibleFlow={visibleFlow} />
  </ReactFlowProvider>
);
