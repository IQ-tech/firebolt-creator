import { Menu, Divider } from "antd";
import {
  FormOutlined,
  PlusOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";
import Tooltip from "../Tooltip";

import useMainSidebar from "./hook";

const { SubMenu } = Menu;

const StepFields = ({
  setVisibleStep,
  visibleStep,
  onOpenAddStep,
  openEditStep,
}) => {
  const { steps, handleVisibleStep, showConfirm, keyControl, setKeyControl } = useMainSidebar({
    setVisibleStep,
  });

  return (
    <div
      css={{
        display: "flex",
        paddingRight: "19px",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div
        css={(theme) => ({
          padding: "16px 24px",
          margin: "0",
          backgroundColor: theme?.colors?.white,
          fontWeight: "500",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
        })}
      >
        Available steps{" "}
        <Tooltip
          title="Steps"
          content="All available steps that can be used on the multistep experience"
          placement="topLeft"
        />
      </div>
      <Divider css={{ margin: "0" }} />
      <Menu
        mode="vertical"
        activeKey={visibleStep?.step?.slug}
        css={{
          width: "240px",
          borderRight: 0,
          flex: 1,
        }}
      >
        {steps.map((step) => (
          <SubMenu
            key={step.step.slug}
            icon={
              step?.step?.type === "form" ? (
                <FormOutlined />
              ) : (
                <FormatPainterOutlined />
              )
            }
            title={step.step.friendlyname}
            onTitleClick={() => handleVisibleStep(step.step.slug)}
          >
            <Menu.Item
              key={`${step.step.slug}-remove`}
              onClick={() => showConfirm(step.step.slug)}
            >
              Remove
            </Menu.Item>
            <Menu.Item
              key={`${step.step.slug}-edit-${keyControl}`}
              onClick={() => {
                setKeyControl(keyControl + 1);
                openEditStep(step);
              }}
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
