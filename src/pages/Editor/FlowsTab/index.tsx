import { Layout } from "antd";
import useFlowTabs from "./hook";
import FlowSidebar from "@/components/FlowSidebar";
import Flow from "@/components/Flow";

const FlowsTab = () => {
  const {
    visibleFlow,
    changeVisibleFlow,
    addNewFlow,
    renameFlow,
    removeFlow,
    flows,
    steps,
  } = useFlowTabs();

  return (
    <Layout
      css={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <FlowSidebar
        flows={flows}
        addNewFlow={addNewFlow}
        renameFlow={renameFlow}
        removeFlow={removeFlow}
        visibleFlow={visibleFlow}
        changeVisibleFlow={changeVisibleFlow}
      />
      <Flow visibleFlow={visibleFlow} steps={steps}  />
    </Layout>
  );
};

export default FlowsTab;
