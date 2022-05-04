import { useState, useRef, useCallback, useEffect } from "react";
import {
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Edge,
  Node,
} from "react-flow-renderer";
import { IFlow } from "@/types/fireboltJSON";

export default function useFlow({ visibleFlow, steps }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null); // TODO: ANY
  const reactFlowWrapper = useRef<any>(null); // TODO: ANY
  const { setViewport } = useReactFlow();
  const flowKey = "currentFlows";

  useEffect(() => {
    const newFlowSteps = edges.reduce((acc, edge, index) => {
      const {target, source} = edge
      let newAcc = [...acc]
      if(!acc.includes(source)) newAcc.push(source) // TODO: 
      if(!acc.includes(target)) newAcc.push(target) // remove o segundo e faz a ligação dos edges[BUG]
      return newAcc
    }, [] as string[])

 //   console.log("🚀 ~ file: hook.ts ~ line 28 ~ newFlowSteps ~ newFlowSteps", newFlowSteps)
  }, [edges])

  useEffect(() => {
    const safeVisibleFlow = steps || [];

    const newEdges: Edge[] = safeVisibleFlow?.reduce((acc, stepSlug, index) => {
      
      const target = safeVisibleFlow[index + 1]?.step?.slug;
      if (!target) {
        return acc;
      }
      const newEdge: Edge = {
        animated: true,
        id: stepSlug?.step?.slug,
        source: stepSlug?.step?.slug,
        sourceHandle: null,
        style: { stroke: "black" },
        target: target,
        targetHandle: null,
      };
      return [...acc, newEdge];
    }, [] as Edge[]);

    const newNodes: any[] = safeVisibleFlow?.map((flowSlug, index) => {
      // TODO: ANY
      return {
        key: index,
        id: flowSlug?.step?.slug,
        data: { label: flowSlug?.step?.friendlyname },
        sourcePosition: "right",
        targetPosition: "left",
        position: {
          x: 180 * index + 1,
          y: 5,
        },
      };
    });
    

    setNodes(newNodes);
    setEdges(newEdges);
   // setViewport({ x: 20 , y: 100, zoom: 0.8 });
  }, [visibleFlow]);

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
      const valueStep = event.dataTransfer.getData("valueStep");

      if (typeof type === "undefined" || !type) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: valueStep,
        type,
        position,
        data: { label: stepCurrent },
        sourcePosition: "right",
        targetPosition: "left",
      };

      setNodes((nds: any[]) => nds.concat(newNode)); // TODO: ANY
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
    const getflowFlows = JSON.parse(localStorage.getItem(flowKey) as string);

    if (getflowFlows) {
      const { x = 0, y = 0, zoom = 1 } = getflowFlows.viewport;
      setNodes(getflowFlows.nodes || []);
      setEdges(getflowFlows.edges || []);
      setViewport({ x, y, zoom });
    }
  };

  const onRestore = useCallback(() => {
    restoreFlow();
  }, [setNodes, setViewport]);

  // useEffect(() => {
  //   restoreFlow();
  // }, []);

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
