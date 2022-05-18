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
  const [populated, setPopulated] = useState(false);

  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance>(); 
  const reactFlowWrapper = useRef<any>(null); // TODO: ANY
  const { dispatch } = useFireboltJSON();

  useEffect(populateEdgesAndNodes, [visibleFlow]);
  useEffect(setNewFlowSteps, [edges]); // problema
  useEffect(() => {reactFlowInstance?.fitView()},[reactFlowInstance])

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
          y: 150
        },
      };
    });
    setNodes(newNodes);
    setEdges(newEdges);
    setPopulated(true);
    reactFlowInstance?.fitView()
  }

  function setNewFlowSteps() {
    if (populated) {
      const newFlowSteps = edges.reduce((acc, edge) => {
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

  const onClean = useCallback(() => {
    if (reactFlowInstance) {
      setNodes([]);
      setEdges([]);
    }
  }, [reactFlowInstance]);

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
    onClean,
 
  };
}
