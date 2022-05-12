import { Card, Select } from "antd";
import { FireboltForm } from "@iq-firebolt/client";
import BlueberryTheme from "@iq-firebolt/blueberry-theme";
import MaterialTheme from "@iq-firebolt/material-theme";
import { useState } from "react";

const { Option } = Select;

const themesMap = {
  blueberry: BlueberryTheme,
  material: MaterialTheme,
  emptyTheme: {}
};

const MainPreview = ({ visibleStep }) => {
  const [usedTheme, setUsedTheme] = useState("blueberry");

  return (
    <div css={{ paddingLeft: "19px", width: "40%" }}>
      <Card
        css={{ height: "100%" }}
        title="Preview"
        extra={
          <Select placeholder="Theme" value={usedTheme} onChange={setUsedTheme}>
            {Object.keys(themesMap).map((key) => (
              <Option key={`theme-option-${key}`} value={key}>
                {key}
              </Option>
            ))}
          </Select>
        }
      >
        <FireboltForm
          theme={themesMap[usedTheme]}
          schema={visibleStep.step.fields}
        />
      </Card>
    </div>
  );
};

export default MainPreview;
