import JsonView from "@/components/JsonView";
import JsonSettings from "@/components/JsonSettings";
import useJSONTabs from "./hook";

const JsonSchema = () => {
const { currentJSON , dispatch} = useJSONTabs()

  return (
    <div
      css={{
        flexDirection: "row",
        display: "flex",
        width: "100%",
        gap: "29px",
      }}
    >
      <JsonView currentJSON={currentJSON} />
      <JsonSettings currentJSON={currentJSON} dispatch={dispatch}/>
    </div>
  );
};

export default JsonSchema;
