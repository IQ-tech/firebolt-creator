import React from "react";
import { MiniMap } from "react-flow-renderer";

const MiniMapFlow = () => (
  <MiniMap
    nodeStrokeColor={(n: any) => {
      if (n.style?.background) return n.style.background;
      if (n.type === "input") return "#0041d0";
      if (n.type === "output") return "#ff0072";
      if (n.type === "default") return "black";

      return "#eee3";
    }}
    nodeColor={(n: any) => {
      if (n.style?.background) return n.style.background;

      return "#533554";
    }}
    nodeBorderRadius={3}
  />
);

export default MiniMapFlow
