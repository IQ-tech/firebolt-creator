import { useState, useRef, useCallback, useEffect } from "react";
import {
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Edge,
  Node,
  ReactFlowInstance,
} from "react-flow-renderer";
import { IFlow, IStep } from "@/types/fireboltJSON";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

// render baloes dos passos de acordo com visible flow
// toda alteração no flow, resulta em um novo track.steps, consequentemente  num dispatch para o contexto

function getStep(stepSlug: string, steps: IStep[]) {
  const step = steps.find((step) => step.step.slug === stepSlug);
  return step;
}

export default function useFlow({
  visibleFlow,
  steps,
}: {
  visibleFlow: IFlow;
  steps: IStep[];
}) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance>(); // TODO: ANY
  const reactFlowWrapper = useRef<any>(null); // TODO: ANY
  const { setViewport } = useReactFlow();
  const { dispatch } = useFireboltJSON();

  const flowKey = "currentFlows";

  useEffect(setNewFlowSteps, [edges]);
  useEffect(populateEdgesAndNodes, [visibleFlow]);

  function populateEdgesAndNodes() {
    const safeVisibleFlow = visibleFlow?.steps || [];

    const newEdges: Edge[] = safeVisibleFlow?.reduce((acc, stepSlug, index) => {
      const target = safeVisibleFlow[index + 1];
      if (!target) {
        return acc;
      }
      const newEdge: Edge = {
        animated: true,
        id: `flow-${visibleFlow.slug}-edge-${stepSlug}-${target}`,
        source: stepSlug,
        sourceHandle: null,
        style: { stroke: "black" },
        target: target,
        targetHandle: null,
      };
      return [...acc, newEdge];
    }, [] as Edge[]);

    const newNodes: Node[] = safeVisibleFlow?.map((stepSlug, index) => {
      const stepData = getStep(stepSlug, steps);
      return {
        key: index,
        id: stepSlug,
        data: { label: stepData?.step.friendlyname },
        sourcePosition: "right" as any,
        targetPosition: "left" as any,
        position: {
          x: 180 * index + 1,
          y: 5,
        },
      };
    });
    setNodes(newNodes);
    setEdges(newEdges);
  }

  function setNewFlowSteps() {
    const newFlowSteps = edges.reduce((acc, edge, index) => {
      const { target, source } = edge;
      let newAcc = [...acc];
      if (!acc.includes(source)) newAcc.push(source); // TODO:
      if (!acc.includes(target)) newAcc.push(target); // remove o segundo e faz a ligação dos edges[BUG]
      return newAcc;
    }, [] as string[]);

    dispatch({
      type: "CHANGE_FLOW_STEPS",
      payload: { slug: visibleFlow.slug, newSteps: newFlowSteps },
    });
  }

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

      const position = reactFlowInstance!.project({
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

  async function restoreFlow() {
    const getflowFlows = JSON.parse(localStorage.getItem(flowKey) as string);

    if (getflowFlows) {
      const { x = 0, y = 0, zoom = 1 } = getflowFlows.viewport;
      setNodes(getflowFlows.nodes || []);
      setEdges(getflowFlows.edges || []);
      setViewport({ x, y, zoom });
    }
  }

  const onRestore = useCallback(() => {
    restoreFlow();
  }, [setNodes, setViewport]);

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
