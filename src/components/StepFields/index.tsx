import { Card, Collapse, Space, Input, Select, Switch, Button } from "antd";
import { ZoomInOutlined, DeleteOutlined } from "@ant-design/icons";

import ValidatorsModal from "../ValidatorsModal";
import AddPropsModal from "../AddPropsModal";

import useStepFields from "./hook";

import * as S from "./styles";

const { Panel } = Collapse;
const { Option } = Select;

const widgetOptions = ["Text", "Select", "Radio", "Checkbox", "Email"];
const presetsOptions = ["cep or br-addons:cep", "option 2"];

const StepFields = ({ visibleStep }) => {
  const {
    stepFields,

    handleAddField,
    handleDeleteField,
    handleEditFieldStyle,
  } = useStepFields({ visibleStep });

  return (
    <Card
      title={`Step fields - ${visibleStep?.step?.friendlyname}`}
      css={S.contentStyles}
      extra={
        <Button
          type="primary"
          onClick={() => handleAddField(visibleStep.step.slug)}
        >
          Add Field
        </Button>
      }
    >
      <Collapse defaultActiveKey={[]} css={S.widthStyles}>
        {stepFields.map((field) => (
          <Panel
            header={field["ui:props"]?.label}
            key={field.slug}
            extra={
              <button
                css={S.deleteButton}
                onClick={() =>
                  handleDeleteField(visibleStep.step.slug, field.slug)
                }
              >
                <DeleteOutlined />
              </button>
            }
          >
            <Space size="large" direction="vertical" css={S.widthStyles}>
              <div css={S.emailInputContent}>
                <div css={S.emailInput}>
                  <span>Slug</span>
                  <Input value={field.slug} />
                </div>
                <div css={S.emailInput}>
                  <span>Conditional</span>
                  <Input placeholder="step.something === true" />
                </div>
              </div>
              <Space direction="vertical" css={S.widthStyles}>
                <span>Widget</span>
                <Select
                  css={S.widthStyles}
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
              {/* <Space direction="vertical" css={S.widthStyles}>
              <span>Props preset</span>
              <Select
                css={S.widthStyles}
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
