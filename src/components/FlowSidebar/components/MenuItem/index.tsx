import { useState } from "react";

import { FormOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import * as S from "../../styles";

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
          css={[S.inputRename(isActive)]}
          type="text"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          autoFocus
        />

        <button
          css={[
            S.defaultBtn(isActive),
            {
              height: "35px",
              width: "35px",
              marginLeft: "3px",
              ":hover": {
                border: "solid 1px black",
              },
            },
          ]}
          type="submit"
        >
          <CheckOutlined />
        </button>
      </form>
    );
  };

  return (
    <div css={[S.containerOptionFlow(isActive)]}>
      {isEditing ? (
        <EditMode />
      ) : (
        <>
          <button
            css={[
              S.defaultBtn(isActive),
              {
                width: "95%",
                textAlign: "left",
                paddingLeft: "8px",
                ":hover": {
                  opacity: 0.8,
                },
              },
            ]}
            type="button"
            onClick={() => changeVisibleFlow(title)}
          >
            {title}
          </button>
          <button
            css={[S.defaultBtn(isActive)]}
            type="button"
            onClick={() => setIsEditing(true)}
          >
            <FormOutlined />
          </button>

          <button
            css={[S.defaultBtn(isActive)]}
            type="button"
            onClick={() => removeFlow(title)}
          >
            <DeleteOutlined />
          </button>
        </>
      )}
    </div>
  );
};

export default MenuItem;
