import { useState, useEffect } from "react";
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
} from "antd";
import { css } from "@emotion/react";
import {
  DeleteOutlined,
  SwapOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";
import Tooltip from "@/components/Tooltip";
import stopPropagation from "@/helpers/stopPropagation";
import isValidExpression from "@/helpers/isValidExpression";
import ValidatorsModal from "../ValidatorsModal";
import AddPropsModal from "../AddPropsModal";

import useStepFields from "./hook";
import { IField, IStep } from "@/types/fireboltJSON";
import { AvailableThemes } from "@/constants/fbt-themes";
import FieldPanel from "../FieldPanel";

const { Panel } = Collapse;
const { Option } = Select;

const widthStyles = css({ width: "100%" });
const headerReset = css`
  .ant-collapse-header {
    align-items: center !important;
  }
`;

interface IStepFields {
  visibleStep: IStep;
  isVisibleStepCustom: boolean;
  stepsList: IStep[];
  selectedTheme: AvailableThemes;
  onOpenMoveFields(field: IField): void;
  onOpenAddField(...args: any): void;
}

interface IStepFieldsValues {
  [step: string]: {
    [field: string]: {
      slug: string;
      conditional: string;
    };
  };
}

const StepFields = ({
  visibleStep,
  isVisibleStepCustom,
  onOpenMoveFields,
  onOpenAddField,
  stepsList,
  selectedTheme,
}: IStepFields) => {
  const {
    stepFields,
    checkHasFieldUp,
    handleDeleteField,
    handleEditFieldStyle,
    checkHasFieldDown,
    handleEditFieldValue,
    moveFieldUp,
    moveFieldDown,
    availableWidgets,
  } = useStepFields({ selectedTheme, visibleStep });

  const cardBodyPadding = isVisibleStepCustom
    ? {
        display: "flex",
        padding: "0",
        flex: 1,
      }
    : {};

  return (
    <Card
      bodyStyle={{ ...cardBodyPadding }}
      title={
        <div
          css={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>Step fields - {visibleStep?.step?.friendlyname}</span>
          <Tooltip
            title="Step fields"
            content="All fields present in the step"
          />
        </div>
      }
      css={{
        display: "flex",
        width: "60%",
        flexDirection: "column",
        alignItems: "stretch",
      }}
      extra={
        <Button
          type="primary"
          disabled={isVisibleStepCustom}
          onClick={onOpenAddField}
        >
          Add Field
        </Button>
      }
    >
      {isVisibleStepCustom ? (
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
            background: "#E8E8E8",
            padding: "100px",
            width: "100%",
            height: "100%",
            flex: 1,
          }}
        >
          <FormatPainterOutlined
            css={{
              fontSize: "100px",
              color: "rgba(172, 172, 172, 0.85)",
              marginBottom: "8px",
            }}
          />

          <p css={{ color: "rgba(0, 0, 0, 0.45)" }}>
            Custom steps doesn't have fields to be rendered
          </p>
        </div>
      ) : (
        <>
          <Collapse css={[widthStyles, headerReset]} defaultActiveKey={[]}>
            {stepFields.map((field, idx) => (
              <FieldPanel
                key={`step-field-${visibleStep.step.slug}-${field.slug}`}
                onOpenMoveFields={onOpenMoveFields}
                field={field}
                visibleStep={visibleStep}
                selectedTheme={selectedTheme}
              />
            ))}
          </Collapse>
        </>
      )}
    </Card>
  );
};

export default StepFields;
