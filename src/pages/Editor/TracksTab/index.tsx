import { Layout } from "antd";
import useTrackTabs from "./hook";
import SidebarFlow from "@/components/SidebarFlow";
import Flow from "@/components/Flow";

const TracksTab = () => {
  const { currentTrack } = useTrackTabs();

  return (
    <Layout
      css={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <SidebarFlow />
      <Flow currentTracks={currentTrack} />
    </Layout>
  );
};

export default TracksTab;
