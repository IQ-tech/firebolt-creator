
import { IFlow, IStep } from "@/types/fireboltJSON";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

interface IStepsAvailable {
    slug: string;
    friendlyname: string;
  }

export default function useSidebar({
  visibleFlow,
  steps,
}: {
  visibleFlow: IFlow;
  steps: IStep[];
}) {

    const { currentJSON } = useFireboltJSON();

    const currentTrack = currentJSON?.tracks.find(
      (track) => track.slug === visibleFlow.slug
    );
    const currentSteps = steps.filter((step) => step.step.slug);
  
    const stepsAvailable = currentSteps.reduce((acc, step) => {
      const isStepBeingUsed = currentTrack?.steps?.indexOf(step.step.slug) !== -1;
      if (!isStepBeingUsed) {
        const availableStep = {
          slug: step.step.slug,
          friendlyname: step.step.friendlyname,
        };
        return [...acc, availableStep];
      }
      return acc;
    }, [] as IStepsAvailable[]);

  return {
    stepsAvailable
  };
}
