import * as S from "./styles";

import { IStep } from "@/types/fireboltJSON";
import Tooltip from "@/components/Tooltip";

const onDragStart = (event, nodeType: string, valueStep: string) => {
  event.dataTransfer.setData("nodeType", nodeType);
  event.dataTransfer.setData("stepCurrent", event.target.innerHTML);
  event.dataTransfer.setData("valueStep", valueStep);
  event.dataTransfer.effectAllowed = "move";
};

const Sidebar = ({ steps }: {steps: IStep[]}) => {
  return (
    <aside css={S.containerSidebarFlow}>
      <h2 css={S.titleSideBarFlow}>You can chose any of the available steps
      <Tooltip title="Available steps" placement="topLeft" content="Rule ..... ... Available steps" />
      </h2>

      {steps?.map(({step}) => (
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
