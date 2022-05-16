import {
  Card,
  Collapse,
  Space,
  Input,
  Select,
  Switch,
  Button,
  Tooltip as AntdTooltip,
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
import ValidatorsModal from "../ValidatorsModal";
import AddPropsModal from "../AddPropsModal";

import useStepFields from "./hook";
import { IStep } from "@/types/fireboltJSON";

const { Panel } = Collapse;
const { Option } = Select;

const widgetOptions = ["Text", "Select", "Radio", "Checkbox", "Email"];

const widthStyles = css({ width: "100%" });
const headerReset = css`
  .ant-collapse-header {
    align-items: center !important;
  }
`;

interface IStepFields {
  visibleStep: IStep;
  isVisibleStepCustom: boolean;
}

const StepFields = ({ visibleStep, isVisibleStepCustom }: IStepFields) => {
  const {
    stepFields,
    checkHasFieldUp,
    handleAddField,
    handleDeleteField,
    handleEditFieldStyle,
    checkHasFieldDown,
    moveFieldUp,
    moveFieldDown,
  } = useStepFields();

  const cardBodyPadding = isVisibleStepCustom ? {
    display: "flex",
    padding: "0",
    flex: 1,
  } : {};

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
          onClick={() => handleAddField(visibleStep.step.slug)}
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
        <Collapse css={[widthStyles, headerReset]} defaultActiveKey={[]}>
          {stepFields.map((field) => (
            <Panel
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
                      onClick={stopPropagation(() =>
                        handleDeleteField(visibleStep.step.slug, field.slug)
                      )}
                    />
                  </AntdTooltip>
                  <AntdTooltip title="Delete field">
                    <Button
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={stopPropagation(() =>
                        handleDeleteField(visibleStep.step.slug, field.slug)
                      )}
                    />
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
                    <span>Slug</span>
                    <Input value={field.slug} />
                  </div>
                  <div
                    css={{
                      width: "49%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <span>Conditional</span>
                    <Input placeholder="step.something === true" />
                  </div>
                </div>
                <Space direction="vertical" css={widthStyles}>
                  <span>Widget</span>
                  <Select
                    css={widthStyles}
                    placeholder="Please select"
                    value={field["ui:widget"]}
                  >
                    {widgetOptions.map((option, index) => (
                      <Option key={index} value={option}>
                        {option}
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
                  <span>Half size</span>
                  <Switch
                    onChange={(e) =>
                      handleEditFieldStyle(visibleStep.step.slug, field, e)
                    }
                    checked={field["ui:styles"]?.size === "half"}
                  />
                </Space>
                <Space>
                  <span>UI props</span>
                  <AddPropsModal field={field} visibleStep={visibleStep} />
                </Space>
                <Space>
                  <span>Validators</span>
                  <ValidatorsModal field={field.validators} />
                </Space>
              </Space>
            </Panel>
          ))}
        </Collapse>
      )}
    </Card>
  );
};

export default StepFields;
