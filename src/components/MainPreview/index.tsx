import { Card, Select } from "antd";
import { FireboltForm } from "@iq-firebolt/client";
import fbtThemes, { AvailableThemes } from "@/constants/fbt-themes";
import { IStep } from "@/types/fireboltJSON";
import { IStepConfigField } from "@iq-firebolt/client-core";
import Tooltip from "@/components/Tooltip";
import { propsPresets } from "@iq-firebolt/br-addons";

const { Option } = Select;

interface IMainPreview {
  visibleStep: IStep;
  isVisibleStepCustom: boolean;
  selectedTheme: AvailableThemes;
  onChangeTheme: (theme: AvailableThemes) => void;
}

const cardBodyPaddingStyle = {
  display: "flex",
  padding: "0",
  flexDirection: "column",
  alignItems: "stretch",
  flex: "1",
};

const MainPreview = ({
  visibleStep,
  isVisibleStepCustom,
  onChangeTheme,
  selectedTheme,
}: IMainPreview) => {
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
            value={selectedTheme}
            onChange={onChangeTheme}
            disabled={isVisibleStepCustom}
          >
            {Object.keys(fbtThemes).map((key) => (
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
            theme={fbtThemes[selectedTheme].theme}
            schema={visibleStep.step.fields as IStepConfigField[]}
            addons={{ uiPropsPresets: [propsPresets] }}
          />
        )}
      </Card>
    </div>
  );
};

export default MainPreview;
