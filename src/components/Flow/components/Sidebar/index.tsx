import * as S from "./styles";

import { IFlow, IStep } from "@/types/fireboltJSON";
import Tooltip from "@/components/Tooltip";

import { useFireboltJSON } from "@/hooks/useFireboltJSON";

interface ISla {
  slug: string;
  friendlyname: string;
}

const onDragStart = (event, nodeType: string, valueStep: string) => {
  event.dataTransfer.setData("nodeType", nodeType);
  event.dataTransfer.setData("stepCurrent", event.target.innerHTML);
  event.dataTransfer.setData("valueStep", valueStep);
  event.dataTransfer.effectAllowed = "move";
};

const Sidebar = ({
  steps,
  visibleFlow,
}: {
  steps: IStep[];
  visibleFlow: IFlow;
}) => {
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
  }, [] as ISla[]);

  console.log({ currentSteps });

  return (
    <aside css={S.containerSidebarFlow}>
      <h2 css={S.titleSideBarFlow}>
        You can chose any of the available steps
        <Tooltip
          title="Available steps"
          placement="topLeft"
          content="Rule ..... ... Available steps"
        />
      </h2>

      {stepsAvailable?.map((step) => (
        <div
          key={`step-item-${step?.friendlyname}`}
          css={S.optionStepStyle}
          onDragStart={(event) => onDragStart(event, "default", step.slug)}
          draggable
        >
          {step?.friendlyname}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
