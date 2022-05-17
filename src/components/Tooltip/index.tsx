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
  css?: any
}

const Tooltip = ({ title, placement, content, css }: ITooltip) => {
  return (
    <Popover css={css} title={title} placement={placement} content={content} arrowPointAtCenter autoAdjustOverflow>
      <div
        css={{
          backgroundColor: "#69c0ff",
          color: "white",
          width: "15px",
          height: "15px",
          margin: "0 10px",
          display: "flex",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "background-color .2s",
          ":hover": {
            backgroundColor: darken(0.1, "#69c0ff"),
          },
        }}
      >
        <QuestionOutlined
          css={{
            svg: {
              width: "12px",
              height: "12px",
            },
          }}
        />
      </div>
    </Popover>
  );
};

export default Tooltip;
