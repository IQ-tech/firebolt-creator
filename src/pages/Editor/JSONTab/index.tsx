import JsonView from "@/components/JsonView";
import JsonSettings from "@/components/JsonSettings";

const JsonSchema = () => {
  return (
    <div
      css={{
        flexDirection: "row",
        display: "flex",
        width: "100%",
        gap: "29px",
      }}
    >
      <JsonView />
      <JsonSettings />
    </div>
  );
};

export default JsonSchema;
