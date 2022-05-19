import { useState, useEffect, isValidElement } from "react";
import {
  Card,
  Collapse,
  Space,
  Input,
  Select,
  Switch,
  Button,
  Tooltip as AntdTooltip,
  Popconfirm,
  Tag,
  CollapsePanelProps,
} from "antd";
import { css } from "@emotion/react";
import {
  DeleteOutlined,
  SwapOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import Tooltip from "@/components/Tooltip";
import stopPropagation from "@/helpers/stopPropagation";
import ValidatorsModal from "../ValidatorsModal";
import AddPropsModal from "../AddPropsModal";

import { IField, IStep } from "@/types/fireboltJSON";
import useFieldPanel from "./hook";
import { AvailableThemes } from "@/constants/fbt-themes";
import InputWithErrorMessage from "../InputWithErrorMessage";

const { Panel } = Collapse;
const { Option } = Select;

const widthStyles = css({ width: "100%" });

interface IFieldPanel {
  field: IField;
  visibleStep: IStep;
  selectedTheme: AvailableThemes;
  onOpenMoveFields(field: IField): void;
}

const FieldPanel = ({
  field,
  visibleStep,
  selectedTheme,
  onOpenMoveFields,
  ...props
}: IFieldPanel) => {
  const {
    checkHasFieldUp,
    moveFieldUp,
    checkHasFieldDown,
    moveFieldDown,
    handleDeleteField,
    availableWidgets,
    handleEditFieldStyle,
    conditional,
    conditionalError,
    setConditional,
  } = useFieldPanel({ selectedTheme, visibleStep, field });

  return (
    <Panel
      {...props}
      header={field.slug}
      key={field.slug}
      css={{ marginBottom: "8px" }}
      extra={
        <Space>
          <AntdTooltip title="Move field up">
            <Button
              type="primary"
              disabled={checkHasFieldUp(field)}
              icon={<ArrowUpOutlined />}
              onClick={stopPropagation(() =>
                moveFieldUp(visibleStep.step.slug, field.slug)
              )}
            />
          </AntdTooltip>
          <AntdTooltip title="Move field down">
            <Button
              type="primary"
              disabled={checkHasFieldDown(field)}
              icon={<ArrowDownOutlined />}
              onClick={stopPropagation(() =>
                moveFieldDown(visibleStep.step.slug, field.slug)
              )}
            />
          </AntdTooltip>
          <AntdTooltip title="Move field to another step">
            <Button
              type="primary"
              icon={<SwapOutlined />}
              onClick={stopPropagation(() => onOpenMoveFields(field))}
            />
          </AntdTooltip>
          <AntdTooltip title="Delete field">
            <Popconfirm
              title="Delete field?"
              placement="bottom"
              onConfirm={stopPropagation(() =>
                handleDeleteField(visibleStep.step.slug, field.slug)
              )}
            >
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={stopPropagation()}
              />
            </Popconfirm>
          </AntdTooltip>
        </Space>
      }
    >
      <Space size="large" direction="vertical" css={widthStyles}>
        <div css={{ width: "100%", gap: "16px", display: "flex" }}>
          <div
            css={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span css={{ display: "flex" }}>
              Slug
              <Tooltip title="Slug" content="Unique identifier to the field" />
            </span>
            <Input value={"test"} onChange={() => {}} />
          </div>
          <div
            css={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <span css={{ display: "flex" }}>
              Conditional
              <Tooltip
                title="Conditional"
                content="Rule to define if a field should be rendered and validated or not"
              />
            </span>
            <InputWithErrorMessage
              errorMessage={conditionalError}
              value={conditional}
              status={conditionalError ? "error" : undefined}
              placeholder="step.something === true"
              onChange={(e) => setConditional(e.target.value)}
            />
          </div>
        </div>
        <Space direction="vertical" css={widthStyles}>
          <span css={{ display: "flex" }}>
            Widget
            <Tooltip title="Widget" content="Rule to set Field Widget" />
          </span>
          <Select
            css={widthStyles}
            placeholder="Please select"
            value={field["ui:widget"]}
            showSearch
          >
            {availableWidgets.map((option, index) => (
              <Option key={index} value={option}>
                {option}
                {"  "}
                <Tag color="geekblue">{selectedTheme}theme</Tag>
              </Option>
            ))}
          </Select>
        </Space>
        {/* <Space direction="vertical" css={widthStyles}>
  <span>Props preset</span>
  <Select
    css={widthStyles}
    placeholder={presetsOptions[0]}
  >
    {presetsOptions.map((option, index) => 
      <Option key={index} value={option}>{option}</Option>
    )}
  </Select>
</Space> */}
        <Space>
          <span css={{ display: "flex" }}>
            Half size
            <Tooltip
              title="Half size"
              content="Rule to set field display size"
            />
          </span>
          <Switch
            onChange={(e) =>
              handleEditFieldStyle(visibleStep.step.slug, field, e)
            }
            checked={field["ui:styles"]?.size === "half"}
          />
        </Space>
        <Space>
          <span css={{ display: "flex" }}>
            UI props
            <Tooltip
              title="UI props"
              content="Define props to be passed to widget component"
            />
          </span>
          <AddPropsModal field={field} visibleStep={visibleStep} />
        </Space>
        <Space>
          <span css={{ display: "flex" }}>
            Validators
            <Tooltip
              title="Validators"
              content="Define validations to be applied to a field"
            />
          </span>
          <ValidatorsModal field={field.validators} />
        </Space>
      </Space>
    </Panel>
  );
};

export default FieldPanel;
