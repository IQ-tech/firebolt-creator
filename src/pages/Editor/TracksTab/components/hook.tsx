import { useState, useRef, useCallback, useEffect } from "react";

export default function useFlow() {
  //const [stepCurrent, setStepCurrent] = useState(): TODO

  const onDragStart = (event: any, nodeType: string) => {
    console.log(event.target.innerHTML);
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("stepCurrent", event.target.innerHTML);
    event.dataTransfer.effectAllowed = "move";
  };

  return {
    onDragStart,
    //stepCurrent: TODO
  };
}
