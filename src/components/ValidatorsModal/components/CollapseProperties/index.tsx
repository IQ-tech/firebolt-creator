//import { validators } from "@iq-firebolt/validators";
import { Select, Collapse } from "antd";

import CollapseHeader from "../CollapseHeader";
import Properties from "../Properties";

import { useFireboltJSON } from "@/hooks/useFireboltJSON";

const { Option } = Select;
const { Panel } = Collapse;

interface ICollapseProperties {
  data: any[];
  remove: (index: number) => void;
  fieldSlug: any;
  stepSlug: string;
  validatorAvailable: any;
  existingValidator;
}

const CollapseProperties = ({
  data,
  remove,
  fieldSlug,
  stepSlug,
  validatorAvailable,
  existingValidator,
}: ICollapseProperties) => {
  // const existingValidator = fieldSlug?.validators?.reduce((acc,cur) =>{
  //   acc = [...acc, cur.type]
  //   return acc
  // },[])

  // const validatorAvailable = Object.keys(validators)?.filter(validator => !existingValidator?.includes(validator))

  //console.log("🚀 ~ file: index.tsx ~ line 25 ~ fieldSlug", validatorAvailable )

  const { dispatch } = useFireboltJSON();

  function handleChangeInput(value: string, valueCurrent: string) {
    //console.log("🚀 ~ file: index.tsx ~ line 38 ~ handleChangeInput ~ value", value)
    // console.log("🚀 ~ file: index.tsx ~ line 38 ~ handleChangeInput ~ valueCurrent", valueCurrent)
    const outroTest = existingValidator.map((type) => {
      if (type === valueCurrent) {
        type = value;
      }
      return type;
    });
    // console.log("🚀 ~ file: index.tsx ~ line 51 ~ handleChangeInput ~ outroTest", outroTest)
    // console.log("🚀 ~ file: index.tsx ~ line 45 ~ outroTest ~ existingValidator", existingValidator)

    dispatch({
      type: "EDIT_OR_ADD_VALIDATOR",
      payload: {
        stepSlug: stepSlug,
        fieldSlug: fieldSlug.slug,
        types: outroTest,
      },
    });
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
                  : `New validator ${field?.name}`
              }
              action={() => {
                console.log(
                  existingValidator.filter((type) => {!type.includes(field.name)
                  return type
                  })
                );
                console.log(field.name);
                remove(field.key);

                dispatch({
                  type: "EDIT_OR_ADD_VALIDATOR",
                  payload: {
                    stepSlug: stepSlug,
                    fieldSlug: fieldSlug.slug,
                    types: existingValidator.filter(
                      (type) => {return !type.includes(field.name)}
                    ),
                  },
                });
                //console.log("Function remove")
              }}
            />
          }
          key={`properties---${field.key}`}
        >
          <div>
            {/* <p>Selected Validator</p> */}
            <Select
              style={{ width: "100%" }}
              placeholder="Select Validator"
              onChange={(e) => handleChangeInput(e, field.name)}
              value={field.name}
            >
              {validatorAvailable.map((validator, index) => (
                <Option
                  key={`options-change-validator-${index}`}
                  value={validator}
                >
                  {validator}
                </Option>
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
            <Properties name={field.name} index={field.key + 989} />
          </div>
        </Panel>
      ))}
    </Collapse>
  );
};

export default CollapseProperties;
