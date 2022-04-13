import { useState, useEffect } from 'react'
import * as M from "@/components/Flow/mocks/mockTracks"

const useTrackTabs = () => {
  const [currentTrack, setCurrentTrack] = useState(M.mockTracks)

  useEffect(() =>  window.scrollTo({ top: 9999, behavior: "smooth" }))

  return {
    currentTrack
  }
}

export default useTrackTabs