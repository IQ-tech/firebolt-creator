import JSONInput from "react-json-editor-ajrm";
{
  /* @ts-ignore */
}
import locale from "react-json-editor-ajrm/locale/pt";

interface IJSONEditor {
  value?: object;
  onChange: Function;
  height?: string;
  width?: string
}

function JSONEditor({ value, onChange, height = '400px', width }: IJSONEditor) {
  const theme = {
    default: "#D4D4D4",
    background: "#F9F9F9",
    background_warning: "#FEECEB",
    string: "#FA7921",
    number: "#70CE35",
    colon: "#49B8F7",
    keys: "#59A5D8",
    keys_whiteSpace: "#835FB6",
    primitive: "#386FA4",
  };

  return (
    <JSONInput
      id="a_unique_id"
      locale={locale}
      height={height}
      width={width}
      colors={theme}
      onChange={onChange}
    />
  );
}

export default JSONEditor;
