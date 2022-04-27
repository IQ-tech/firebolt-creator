import { Layout } from "antd";
import useFlowTabs from "./hook";
import FlowSidebar from "@/components/FlowSidebar";
import Flow from "@/components/Flow";

const FlowsTab = () => {
  const { currentFlow } = useFlowTabs();

  return (
    <Layout
      css={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <FlowSidebar />
      <Flow currentFlows={currentFlow} />
    </Layout>
  );
};

export default FlowsTab;
