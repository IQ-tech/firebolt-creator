import { Menu, Divider } from "antd";
import { FormOutlined, PlusOutlined } from "@ant-design/icons";

import useMainSidebar from "./hook";

const { SubMenu } = Menu;

const StepFields = ({
  setVisibleStep,
  visibleStep,
  onOpenAddStep,
  openEditStep,
}) => {
  const { steps, handleVisibleStep, handleDeleteStep } = useMainSidebar({
    setVisibleStep,
  });

  return (
    <div css={{ paddingRight: "19px" }}>
      <p
        css={(theme) => ({
          padding: "16px 24px",
          margin: "0",
          backgroundColor: theme?.colors?.white,
          fontWeight: "500",
          fontSize: "16px",
        })}
      >
        Steps
      </p>
      <Divider css={{ margin: "0" }} />
      <Menu
        mode="vertical"
        activeKey={visibleStep?.step?.slug}
        css={{
          width: "240px",
          height: `${document.body.clientHeight}px`,
        }}
      >
        {steps.map((step) => (
          <SubMenu
            key={step.step.slug}
            icon={<FormOutlined />}
            title={step.step.friendlyname}
            onTitleClick={() => handleVisibleStep(step.step.slug)}
          >
            <Menu.Item
              key={`${step.step.slug}-remove`}
              onClick={() => handleDeleteStep(step.step.slug)}
            >
              Remove
            </Menu.Item>
            <Menu.Item
              key={`${step.step.slug}-edit`}
              onClick={() => openEditStep(step)}
            >
              Edit
            </Menu.Item>
          </SubMenu>
        ))}
        <Menu.Item
          css={(theme) => ({ color: theme?.colors?.["blue-cyan"] })}
          key="add-step-menu-item"
          icon={<PlusOutlined />}
          onClick={onOpenAddStep}
        >
          Add
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default StepFields;
