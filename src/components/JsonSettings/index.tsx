import { Space, Card, Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

// const plugins = [
//   "br-addons",
//   "us-addons",
//   "pluggin-4",
//   "pluggin-5",
//   "pluggin-6",
// ];


const JsonSettings = ({currentJSON, dispatch}) =>{ 

  return (
  <Card title="Settings" css={{ width: "100%" }}>
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      
        <Space direction="vertical" css={{ width: "100%" }}>
          <span>{"$schema-version"}</span>
          <Input
            defaultValue={currentJSON?.["$schema-version"]}
            css={{
              color: "rgba(0, 0, 0, 0.25)",
              ":focus": { color: "#000000" },
            }}
            onChange={(e) => {
              dispatch({
                type: "SET_EXPERIENCE_FBT_VERSION",
                payload:  e?.target?.value ,
              });
            }
          }
          />
        </Space>
    
        <Space direction="vertical" css={{ width: "100%" }}>
          <span>{"$form-version"}</span>
          <Input
            defaultValue={currentJSON?.["$form-version"]}
            css={{
              color: "rgba(0, 0, 0, 0.25)",
              ":focus": { color: "#000000" },
            }}
            onChange={(e) => {
              dispatch({
                type: "SET_EXPERIENCE_VERSION",
                payload: { experienceVersion: e?.target?.value },
              });
            }
          }
          />
        </Space>
     

      {/* <Space direction="vertical" css={{ width: "100%" }}>
        <span>Plugins</span>
        <div>
          <Select
            mode="multiple"
            css={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={["br-addons", "us-addons"]}
          >
            {plugins.map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </div>
      </Space> */}

      <Space>
        <span>Webhook config</span>
        <Button type="primary" icon={<SearchOutlined />}>
          Open webhook configs
        </Button>
      </Space>
    </div>
  </Card>
);
    }

export default JsonSettings;
