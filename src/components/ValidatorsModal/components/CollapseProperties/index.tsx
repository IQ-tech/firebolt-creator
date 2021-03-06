import { Select, Collapse } from "antd";

import CollapseHeader from "../CollapseHeader";
import Properties from "../Properties";

import useCollapseProperties from "./hook";

interface ICollapseProperties {
  data: any[];
  remove: (index: number) => void;
  fieldSlug: object | any;
  stepSlug: string;
  validatorAvailable: string[];
  existingValidator: string[];
}

const CollapseProperties = ({
  data,
  remove,
  fieldSlug,
  stepSlug,
  validatorAvailable,
  existingValidator,
}: ICollapseProperties) => {
 
  const { dispatch, handleChangeInput } = useCollapseProperties({
    fieldSlug,
    stepSlug,
    existingValidator,
  });

  return (
    <Collapse ghost>
      {data.map((field, index) => (
        <Collapse.Panel
          css={{
            background: "#FAFAFA",
            border: "1px solid #d9d9d9",
          }}
          header={
            <CollapseHeader
              name={
                typeof field.name === "string"
                  ? field.name
                  : `New validator ${field?.name}`
              }
              action={() => {
                remove(field.key);

                dispatch({
                  type: "EDIT_OR_ADD_VALIDATOR",
                  payload: {
                    stepSlug: stepSlug,
                    fieldSlug: fieldSlug.slug,
                    types: existingValidator.filter((type) => {
                      return !type.includes(field.name);
                    }),
                  },
                });
              }}
            />
          }
          key={`properties---${field.key}${index}`}
        >
          <div>
             <p css={{marginBottom: 10, textAlign: "center"}}>to change the validator</p> 
            <Select
              style={{ width: "100%" }}
              placeholder="Select Validator"
              onChange={(e) => handleChangeInput(e, field.name)}
              value={field.name}
            >
              {validatorAvailable.map((validator, index) => (
                <Select.Option
                  key={`options-change-validator-${index}`}
                  value={validator}
                >
                  {validator}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div
            css={{
              marginTop: "25px",
            }}
          >
            <p css={{ width: "100%", textAlign: "center" }}>
              Validator Properties
            </p>
            <Properties name={field.name} index={index + 900} />
          </div>
        </Collapse.Panel>
      ))}
    </Collapse>
  );
};

export default CollapseProperties;
