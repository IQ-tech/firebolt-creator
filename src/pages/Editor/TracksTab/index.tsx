import { Layout } from "antd";
import useTrackTabs from "./hook";
import SidebarFlow from "@/components/SidebarFlow";
import Flow from "@/components/Flow";
import * as S from "./styles";


const TracksTab = () => {
  const { currentTrack } = useTrackTabs()

  return (
    <Layout css={S.contentStyles}>
      <SidebarFlow />
      <Flow currentTracks={currentTrack} />
    </Layout>
  );
};

export default TracksTab;
