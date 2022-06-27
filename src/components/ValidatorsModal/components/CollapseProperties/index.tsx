import { validators } from "@iq-firebolt/validators";
import { Select, Collapse } from "antd";

import CollapseHeader from "../CollapseHeader";
import Properties from "../Properties";

import * as S from "./styles";

import { useState } from "react";

const { Option } = Select;
const { Panel } = Collapse;

interface ICollapseProperties {
  data: any[];
  remove: (index: number) => void;
}

const CollapseProperties = ({ data, remove }: ICollapseProperties) => {
  function handleChangeInput(value: any) {
    // console.log("🚀 ~ file: index.tsx ~ line 18 ~ CollapseProperties ~ data", data)
    console.log(`selected VALIDATOR ${value}`);
  }

  return (
    <Collapse ghost>
      {data.map((field: any, index: number) => (
        <Panel
          css={{
            background: "#FAFAFA",
            border: "1px solid #d9d9d9",
          }}
          header={
            <CollapseHeader
              name={
                typeof field.name === "string"
                  ? field.name
                  : `New validator ${field.name}`
              }
              action={() => remove(index)}
            />
          }
          key={field.key + 1}
        >
          <div>
            {/* <p>Selected Validator</p> */}
            <Select
              style={{ width: "100%" }}
              placeholder="Select Validator"
              onChange={handleChangeInput}
              defaultValue={typeof field.name === "string" ? field.name : null}
            >
              {Object.keys(validators).map((validator, index) => (
                <Option key={index} value={validator}>
                  {validator}
                </Option>
              ))}
            </Select>
          </div>
          <div css={S.inputGroupStyles}>
            <p css={{ width: "100%", textAlign: "center" }}>
              Validator Properties
            </p>
            <Properties name={field.name} index={field.key + 1} />
          </div>
        </Panel>
      ))}
    </Collapse>
  );
};

export default CollapseProperties;
