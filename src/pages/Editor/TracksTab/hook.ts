import { useState } from "react";
import * as M from "@/components/Flow/mocks/mockTracks";

const useTrackTabs = () => {
  const [currentTrack, setCurrentTrack] = useState(M.mockTracks);

  return {
    currentTrack,
  };
};

export default useTrackTabs;
