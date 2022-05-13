import {
  Card,
  Collapse,
  Space,
  Input,
  Select,
  Switch,
  Button,
  Tooltip,
} from "antd";
import { css } from "@emotion/react";
import {
  DeleteOutlined,
  SwapOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import ValidatorsModal from "../ValidatorsModal";
import AddPropsModal from "../AddPropsModal";

import useStepFields from "./hook";

const { Panel } = Collapse;
const { Option } = Select;
const widthStyles = css({ width: "100%" });

const widgetOptions = ["Text", "Select", "Radio", "Checkbox", "Email"];

const StepFields = ({ visibleStep }) => {
  const {
    stepFields,
    checkHasFieldUp,
    handleAddField,
    handleDeleteField,
    handleEditFieldStyle,
    checkHasFieldDown,
  } = useStepFields();

  return (
    <Card
      title={`Step fields - ${visibleStep?.step?.friendlyname}`}
      css={{ width: "60%" }}
      extra={
        <Button
          type="primary"
          onClick={() => handleAddField(visibleStep.step.slug)}
        >
          Add Field
        </Button>
      }
    >
      <Collapse defaultActiveKey={[]} css={widthStyles}>
        {stepFields.map((field) => (
          <Panel
            header={field.slug}
            key={field.slug}
            css={{ marginBottom: "8px" }}
            extra={
              <Space>
                <Tooltip title="Move field up">
                  <Button
                    type="primary"
                    disabled={checkHasFieldUp(field)}
                    icon={<ArrowUpOutlined />}
                    onClick={() =>
                      handleDeleteField(visibleStep.step.slug, field.slug)
                    }
                  />
                </Tooltip>
                <Tooltip title="Move field down">
                  <Button
                    type="primary"
                    disabled={checkHasFieldDown(field)}
                    icon={<ArrowDownOutlined />}
                    onClick={() =>
                      handleDeleteField(visibleStep.step.slug, field.slug)
                    }
                  />
                </Tooltip>
                <Tooltip title="Move field to another step">
                  <Button
                    type="primary"
                    icon={<SwapOutlined />}
                    onClick={() =>
                      handleDeleteField(visibleStep.step.slug, field.slug)
                    }
                  />
                </Tooltip>
                <Tooltip title="Delete field">
                  <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() =>
                      handleDeleteField(visibleStep.step.slug, field.slug)
                    }
                  />
                </Tooltip>
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
    </Card>
  );
};

export default StepFields;
