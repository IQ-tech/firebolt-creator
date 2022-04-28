import { useState } from "react";

import { FormOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

type MenuItemProps = {
  title: string;
  isActive: boolean;
  renameFlow: (flowSlug: string, newFlowSlug: string) => void;
  removeFlow: (flowSlug: string) => void;
  changeVisibleFlow: (flowSlug: string) => void;
};

const MenuItem = ({
  title,
  isActive,
  renameFlow,
  removeFlow,
  changeVisibleFlow,
}: MenuItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputData, setInputData] = useState(title);

  const EditMode = () => {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsEditing(false);
          renameFlow(title, inputData || title);
        }}
      >
        <input
        css={{
          background: isActive ? "#e6f7ff" : "unset",
          height: "40px",
          width: "75%",
          border: "none",
          paddingLeft: "5px"
        }}
          type="text"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          autoFocus
        />

        <button 
        css={{
          background: isActive ? "#e6f7ff" : "unset",
          marginLeft: "3px",
          height: "35px",
          width: "35px",
          border: "none",
          cursor: "pointer",
          ":hover": {
            opacity: 0.7,
            border: "solid 1px black"
          },
        }}
        
        type="submit">
          <CheckOutlined />
        </button>
      </form>
    );
  };

  return (
    <div
      css={{
        background: isActive ? "#e6f7ff" : "unset",
        color: isActive ? "#1890ff" : "#000000d9",
        height: "40px",
        width: "100%",
        maxWidth: "240px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      {isEditing ? (
        <EditMode />
      ) : (
        <>
          <button
            css={{
              background: isActive ? "#e6f7ff" : "unset",
              height: "40px",
              width: "95%",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              paddingLeft: "8px"
            }}
            type="button"
            onClick={() => changeVisibleFlow(title)}
          >
           {title}
          </button>
            <button
              css={{
                background: isActive ? "#e6f7ff" : "unset",
                height: "40px",
                width: "40px",
                border: "none",
                cursor: "text",
                ":hover": {
                  opacity: 0.4
                },
              }}
              type="button"
              onClick={() => setIsEditing(true)}
            >
              <FormOutlined />
            </button>

          <button 
          css={{
            background: isActive ? "#e6f7ff" : "unset",
            height: "40px",
            width: "40px",
            border: "none",
            cursor: "pointer",
            ":hover": {
              opacity: 0.4
            },
          }}
           type="button" onClick={() => removeFlow(title)}>
            <DeleteOutlined />
          </button>
        </>
      )}
    </div>
  );
};

export default MenuItem;
