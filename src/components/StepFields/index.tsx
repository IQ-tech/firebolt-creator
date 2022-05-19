import { Card, Collapse, Button } from "antd";
import { css } from "@emotion/react";
import { FormatPainterOutlined } from "@ant-design/icons";
import Tooltip from "@/components/Tooltip";
import { IField, IStep } from "@/types/fireboltJSON";
import { AvailableThemes } from "@/constants/fbt-themes";
import FieldPanel from "../FieldPanel";

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

const StepFields = ({
  visibleStep,
  isVisibleStepCustom,
  onOpenMoveFields,
  onOpenAddField,
  selectedTheme,
}: IStepFields) => {
  const stepFields = visibleStep.step.fields;

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
