import { Card, Select } from "antd";
import { FireboltForm } from "@iq-firebolt/client";
import BlueberryTheme from "@iq-firebolt/blueberry-theme";
import { mockFields } from "@/pages/Editor/MainTab/mock";

const { Option } = Select;

const MainPreview = ({ visibleStep }) => (
  
  <div css={{ paddingLeft: "19px", width: "40%" }}>
    <Card
      css={{ height: "100%" }}
      title="Preview"
      extra={
        <Select placeholder="Theme">
          <Option value="theme">Theme</Option>
        </Select>
      }
    >
      <FireboltForm theme={BlueberryTheme} schema={visibleStep.step.fields} />
    </Card>
  </div>
);

export default MainPreview;
