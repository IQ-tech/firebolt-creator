import { Menu, Divider } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import useSidebarFlow from "./hook";

const SidebarFlow = ({ onChangeVisibleFlow, visibleFlow }) => {
  const { optionsFlow, addOptions } = useSidebarFlow();

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
        expandIcon={<EllipsisOutlined />}
        defaultSelectedKeys={[`flow-option-${visibleFlow}`]}
      >
        {optionsFlow.map((option) => (
          <Menu.Item
            key={`flow-option-${option}`}
            icon={<FormOutlined />}
            onClick={() => onChangeVisibleFlow(option)}
          >
            <span> {option}</span>
            <EllipsisOutlined
              css={{ position: "absolute", left: "210px", top: "10px" }}
            />
          </Menu.Item>
        ))}

        <Menu.Item
          css={{ color: "#148EFF" }}
          key="add"
          icon={<PlusOutlined />}
          onClick={() => addOptions()}
        >
          {" "}
          Add
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SidebarFlow;
