import { Menu, Divider } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import useSidebarFlow from "./hook";
import * as S from "./styles";


const SidebarFlow = () => {

  const {optionsFlow, addOptions} = useSidebarFlow()

  return (
    <div css={S.contentSidebarStyles}>
      <h2 css={S.sidebarTitleStyles}>Flows list</h2>
      <Divider css={S.dividerStyles} />
      <Menu
        css={S.menuContentStyles}
        mode="vertical"
        expandIcon={<EllipsisOutlined />}
        defaultSelectedKeys={["default"]}
      >
        {optionsFlow.map((option, i) => (
          <Menu.Item
            key={option}
            icon={<FormOutlined />}
          >
            <span>
              {" "}
              {option}
            </span>
            <EllipsisOutlined
              css={{ position: "absolute", left: "210px", top: "10px" }}
            />
          </Menu.Item>
        ))}

        <Menu.Item
          css={S.addLinkStyles}
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

export default SidebarFlow