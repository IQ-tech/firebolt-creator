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

export default function useFlow({ visibleFlow }: { visibleFlow: IFlow }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance]: any = useState(null);
  const reactFlowWrapper: any = useRef(null);

  /**
    *  animated: true
       id: "reactflow__edge-test-test1"
      source: "test"
      sourceHandle: null
    style: {stroke: 'black'}
    target: "test1"
      targetHandle: null
      reactFlowInstance.toObject()
    */
  useEffect(() => {
    // visibleFlow.steps
    const safeVisibleFlow = visibleFlow.steps || [];

    const newEdges: Edge[] = safeVisibleFlow.reduce((acc, stepSlug, index) => {
      const target = safeVisibleFlow[index + 1];
      if (!target) {
        return acc;
      }
      const newEdge: Edge = {
        animated: true,
        id: `${visibleFlow.slug}-step-${stepSlug}`,
        source: stepSlug,
        sourceHandle: null,
        style: { stroke: "black" },
        target: target,
        targetHandle: null,
      };
      return [...acc, newEdge];
    }, [] as Edge[]);

    const newNodes: Node[] = safeVisibleFlow.map((flowSlug, index) => {
      return {
        id: flowSlug,
        data: { label: flowSlug },
        sourcePosition: "right",
        targetPosition: "left",
        position: {
          x: 5,
          y: 5 + (5 * index + 1),
        },
        
      };
    });

    setNodes(newNodes);
    setEdges(newEdges);
  }, [visibleFlow]);

  // useEffect(() => {
  //   console.log({nodes, edges})
  // }, [nodes, edges])

  const { setViewport } = useReactFlow();

  const flowKey = "currentFlows";

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
    // console.log("luiz",reactFlowInstance.toObject())
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
    const getflowFlows = JSON.parse(localStorage.getItem(flowKey) as any);

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
