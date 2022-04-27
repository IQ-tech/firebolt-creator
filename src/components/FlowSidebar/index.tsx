import { Menu, Divider } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import useSidebarFlow from "./hook";
import { IFlow, IStep } from "@/types/fireboltJSON";

const { SubMenu } = Menu;

import MenuItem from "./MenuItem"

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
  const { optionsFlow, addOptions, startAddNewFlow } = useSidebarFlow();

  return (
    <div css={{ paddingRight: "19px" }}>
      <h2
        css={{
          padding: "16px 24px",
          margin: "0",
          backgroundColor: "#fff",
          fontWeight: "500",
          fontSize: "16px",
        }}
      >
        Flows list
      </h2>
      <Divider css={{ margin: "0" }} />
      <Menu
        css={{
          width: "240px",
          height: `${document.body.clientHeight / 1.3}px`,
        }}
        mode="vertical"
        // expandIcon={<EllipsisOutlined />}
        defaultSelectedKeys={[`flow-option-${visibleFlow}`]}
      >
        {flows.map(({ slug }) => (
          // <SubMenu
          //   key={`flow-option-${slug}`}
          //   // icon={<FormOutlined />}
          //   onTitleClick={() => onChangeVisibleFlow(slug)}
          //   title={slug}
          // >
          //   <Menu.Item key={`${slug}-rename`} onClick={()=> alert(`${slug}`)}>Rename</Menu.Item>
          //   <Menu.Item key={`${slug}-remove`}>Remove</Menu.Item>
          // </SubMenu>
          <MenuItem
            key={`flow-option-${slug}`}
            title={slug}
            isActive={visibleFlow.slug === slug}
            renameFlow={renameFlow}
            removeFlow={removeFlow}
            changeVisibleFlow={changeVisibleFlow}
          />
        ))}

        {/* <Menu.Item
          css={{ color: "#148EFF" }}
          key="add"
          icon={<PlusOutlined />}
          onClick={() => addOptions()}
        >
          {" "}
          Add
        </Menu.Item> */}
        <button
          css={{ color: "#148EFF" }}
          onClick={() => addNewFlow("newFlow")}
        >
          <PlusOutlined />
          {" "}
          Add
        </button>
      </Menu>
    </div>
  );
};

export default FlowSidebar;
