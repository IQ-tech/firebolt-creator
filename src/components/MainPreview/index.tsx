import { Card, Select } from "antd";
import { FireboltForm } from "@iq-firebolt/client";
import BlueberryTheme from "@iq-firebolt/blueberry-theme";
import MaterialTheme from "@iq-firebolt/material-theme";
import { useState } from "react";
import { IStep } from "@/types/fireboltJSON";
import { IStepConfigField } from "@iq-firebolt/client-core";
import Tooltip from "@/components/Tooltip";

const { Option } = Select;

const themesMap = {
  blueberry: BlueberryTheme,
  material: MaterialTheme,
  emptyTheme: {},
};

interface IMainPreview {
  visibleStep: IStep;
  isVisibleStepCustom: boolean;
}

const cardBodyPaddingStyle = {
  display: "flex",
  padding: "0",
  flexDirection: "column",
  alignItems: "stretch",
  flex: "1",
};

const MainPreview = ({ visibleStep, isVisibleStepCustom }: IMainPreview) => {
  const [usedTheme, setUsedTheme] = useState("blueberry");

  const cardBodyPadding = isVisibleStepCustom ? cardBodyPaddingStyle : {};

  return (
    <div
      css={{
        display: "flex",
        width: "40%",
        paddingLeft: "19px",
        alignItems: "stretch",
      }}
    >
      <Card
        css={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          flex: 1,
        }}
        title={
          <div
            css={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Preview
            <Tooltip
              title="Preview"
              content="Partial rendering of the step, standalone themes can be used/developed by third party users"
            />
          </div>
        }
        bodyStyle={cardBodyPadding}
        extra={
          <Select
            placeholder="Theme"
            value={usedTheme}
            onChange={setUsedTheme}
            disabled={isVisibleStepCustom}
          >
            {Object.keys(themesMap).map((key) => (
              <Option key={`theme-option-${key}`} value={key}>
                {key}
              </Option>
            ))}
          </Select>
        }
      >
        {isVisibleStepCustom ? (
          <div
            css={{
              backgroundColor: "#E8E8E8",
              height: "100%",
              padding: "24px",
              color: "rgba(0, 0, 0, 0.45)",
              flex: 1,
            }}
          >
            <p>Custom steps doesn't have fields to be rendered</p>
          </div>
        ) : (
          <FireboltForm
            customActionsChild={() => <></>}
            theme={themesMap[usedTheme]}
            schema={visibleStep.step.fields as IStepConfigField[]}
          />
        )}
      </Card>
    </div>
  );
};

export default MainPreview;
