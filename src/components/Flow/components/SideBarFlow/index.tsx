import React from "react";
import * as S from "./styles";

interface IStep {
  step?:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}

const onDragStart = (event, nodeType: string) => {
  event.dataTransfer.setData("nodeType", nodeType);
  event.dataTransfer.setData("stepCurrent", event.target.innerHTML);
  event.dataTransfer.effectAllowed = "move";
};

const SideBarFlow = ({ stepsTracks }) => {
  return (
    <aside css={S.containerSidebarFlow}>
      <h2 css={S.titleSideBarFlow}>You can chose any of the available steps</h2>

      {stepsTracks?.map((step: IStep, i: React.Key | null | undefined) => (
        <div
          key={i}
          css={S.optionStepStyle}
          onDragStart={(event) => onDragStart(event, "default")}
          draggable
        >
          {step}
        </div>
      ))}
    </aside>
  );
};

export default SideBarFlow;
