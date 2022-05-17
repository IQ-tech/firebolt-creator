import React from "react";
import { QuestionOutlined } from "@ant-design/icons";
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
          backgroundColor: "#69c0ff",
          color: "white",
          width: "16px",
          height: "16px",
          marginInline: "10px",
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          cursor: "pointer",
          transition: "background-color .2s",
          ":hover": {
            backgroundColor: darken(0.1, "#69c0ff"),
          },
        }}
      >
        <QuestionOutlined />
      </div>
    </Popover>
  );
};

export default Tooltip;
