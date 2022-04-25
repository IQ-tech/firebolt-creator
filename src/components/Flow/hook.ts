import { useState, useRef, useCallback, useEffect } from "react";
import {
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from "react-flow-renderer";


export default function useFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance]: any = useState(null);
  const reactFlowWrapper: any = useRef(null);

  useEffect(() => {
    console.log({edges, nodes})
  }, [edges, nodes])

  const { setViewport } = useReactFlow();

  const flowKey = "currentTracks";

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => {
        const validConnection = eds.some((e) =>
          e?.source?.includes(params.source)
        );
        if (!validConnection) return addEdge(params, eds);
        return eds;
      }),
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
      const setFlow = reactFlowInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(setFlow));
    }
  }, [reactFlowInstance]);

  const onClean = useCallback(() => {
    if (reactFlowInstance) {
      setNodes([]);
      setEdges([]);
    }
  }, [reactFlowInstance]);

  const restoreFlow = async () => {
    const getflowTracks = JSON.parse(localStorage.getItem(flowKey) as any);

    if (getflowTracks) {
      const { x = 0, y = 0, zoom = 1 } = getflowTracks.viewport;
      setNodes(getflowTracks.nodes || []);
      setEdges(getflowTracks.edges || []);
      setViewport({ x, y, zoom });
    }
  };

  const onRestore = useCallback(() => {
    restoreFlow();
  }, [setNodes, setViewport]);

  useEffect(() => {
    restoreFlow();
  }, []);

  return {
    nodes,
    onNodesChange,
    edges,
    onEdgesChange,
    reactFlowWrapper,
    setReactFlowInstance,
    onConnect,
    onDragOver,
    onDrop,
    onSave,
    onRestore,
    onClean,
  };
}
