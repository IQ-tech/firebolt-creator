import { Layout } from "antd";
import useFlowTabs from "./hook";
import FlowSidebar from "@/components/FlowSidebar";
import Flow from "@/components/Flow";

const FlowsTab = () => {
  const { visibleFlow, setVisibleFlow } = useFlowTabs();

  return (
    <Layout
      css={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <FlowSidebar
        visibleFlow={visibleFlow?.slug}
        onChangeVisibleFlow={setVisibleFlow}
      />
      <Flow currentFlows={visibleFlow?.slug} visibleFlow={visibleFlow?.slug} />
    </Layout>
  );
};

export default FlowsTab;
