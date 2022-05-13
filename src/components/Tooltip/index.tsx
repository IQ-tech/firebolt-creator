import React from "react";
import { QuestionOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { darken } from "polished";

interface ITooltip {
  title: React.ReactNode;
  content: React.ReactNode;
}

const Tooltip = ({ title, content }: ITooltip) => {
  return (
    <Popover title={title} content={content}>
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
