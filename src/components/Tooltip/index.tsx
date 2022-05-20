import React from "react";
import { QuestionOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { darken } from "polished";

interface ITooltip {
  title: React.ReactNode;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  content: React.ReactNode;
  css?: any;
}

const Tooltip = ({ title, placement, content, css }: ITooltip) => {
  return (
    <Popover
      css={css}
      title={title}
      placement={placement}
      content={content}
      arrowPointAtCenter
      autoAdjustOverflow
    >
      <div
        css={{
          color: "#69c0ff",
          marginInline: "10px",
          fontSize: "12px",
          cursor: "pointer",
          transition: "color .2s",
          ":hover": {
            color: darken(0.1, "#69c0ff"),
          },
        }}
      >
        <QuestionCircleOutlined />
      </div>
    </Popover>
  );
};

export default Tooltip;
