import * as S from "./styles";

import { IFlow, IStep } from "@/types/fireboltJSON";
import useSidebar from "./hook";
import Tooltip from "@/components/Tooltip";

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
  const { stepsAvailable } = useSidebar({ visibleFlow, steps })

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
