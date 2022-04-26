import { Layout } from "antd";
import useFlowTabs from "./hook";
import SidebarFlow from "@/components/SidebarFlow";
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
      <SidebarFlow />
      <Flow currentFlows={currentFlow} />
    </Layout>
  );
};

export default FlowsTab;
