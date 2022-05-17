import { useState } from "react";

import { FormOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import * as S from "../../styles";


import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

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



const { confirm } = Modal;

function showConfirm(title) {
  confirm({
    title: `Do you want to delete this ${title}?`,
    icon: <ExclamationCircleOutlined />,
    content: `Are you sure you want to do this`,
    onOk() {
      removeFlow(title)
    },
  });
}

  const EditMode = () => {
    return (
      <form
      css={{display: "flex"}}
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

        <Button
        css={{margin: "5px"}}
        disabled={title === "default"}
        type="primary" htmlType="submit"
        icon={<CheckOutlined />}
        />

        {/* <button
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
        </button> */}
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
          <Button
            disabled={title === "default"}
            type="primary"
            icon={ <FormOutlined />}
            onClick={() => setIsEditing(true)}
          />

          <Button
            disabled={title === "default"}
            css={[S.defaultBtn(isActive)]}
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => showConfirm(title)}
          />
        </>
      )}
    </div>
  );
};

export default MenuItem;
