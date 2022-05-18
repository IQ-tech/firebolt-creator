import { useState } from "react";
import { Menu, Divider, Input, Button } from "antd";
import slugify from "slugify";
import { PlusOutlined } from "@ant-design/icons";
import { IFlow } from "@/types/fireboltJSON";
import * as S from "./styles";

import MenuItem from "./components/MenuItem";
import Tooltip from "@/components/Tooltip";

interface IFlowSidebar {
  flows: IFlow[];
  visibleFlow: IFlow;
  addNewFlow: (flowSlug: string) => void;
  renameFlow: (flowSlug: string, newFlowSlug: string) => void;
  removeFlow: (flowSlug: string) => void;
  changeVisibleFlow: (flowSlug: string) => void;
}

const FlowSidebar = ({
  flows,
  visibleFlow,
  addNewFlow,
  renameFlow,
  removeFlow,
  changeVisibleFlow,
}: IFlowSidebar) => {
  const [isAddingFlow, setIsAddingFlow] = useState(false);
  const [newFlowSlug, setNewFlowSlug] = useState("");

  function changeNewFlowSlug(newSlug: string) {
    // validate string,
    setNewFlowSlug(slugify(newSlug, { lower: true }));
  }

  function submitNewFlowSlug() {
    addNewFlow(slugify(newFlowSlug));
    setNewFlowSlug("");
    setIsAddingFlow(false);
  }

  return (
    <div css={{ paddingRight: "19px" }}>
      <h2
        css={{
          display: "flex",
          alignItems: "center",
          padding: "16px 24px",
          margin: "0",
          backgroundColor: "#fff",
          fontWeight: "500",
          fontSize: "16px",
        }}
      >
        Flows list
        <Tooltip title="Flows list" placement="topRight" content="Rule ..... ... Flows list" />
      </h2>
      <Divider css={{ margin: "0" }} />
      <Menu
        css={{
          width: "240px",
          height: `${document.body.clientHeight / 1.3}px`,
        }}
        mode="vertical"
        defaultSelectedKeys={[`flow-option-${visibleFlow.slug}`]}
        selectedKeys={[`flow-option-${visibleFlow.slug}`]}
      >
        {flows.map(({ slug }) => (
          <MenuItem
            key={`flow-option-${slug}`}
            title={slug}
            isActive={visibleFlow.slug === slug}
            renameFlow={renameFlow}
            removeFlow={removeFlow}
            changeVisibleFlow={changeVisibleFlow}
          />
        ))}
        <Menu.Item key="add-item-form">
          {isAddingFlow ? (
            <form
              onBlur={() => setIsAddingFlow(false)}
              onSubmit={submitNewFlowSlug}
            >
              <Input.Group compact>
                <Input
                  style={{ width: "calc(100% - 32px)" }}
                  autoFocus
                  onChange={(event) => changeNewFlowSlug(event.target.value)}
                  onBlur={(e) => e.stopPropagation()}
                />
                <Button icon={<PlusOutlined />} onClick={submitNewFlowSlug} />
              </Input.Group>
            </form>
          ) : (
            <button
              css={[
                S.defaultBtn(),
                {
                  width: "100%",
                  color: "#1890ff",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 10,
                },
              ]}
              onClick={() => setIsAddingFlow(true)}
            >
              <PlusOutlined /> Add
            </button>
          )}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default FlowSidebar;
