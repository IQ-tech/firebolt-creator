import React from "react";
import { MiniMap } from "react-flow-renderer";

const MiniMapFlow = () => (
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
);

export default MiniMapFlow
