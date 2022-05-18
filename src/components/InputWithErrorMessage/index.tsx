import { Input, InputProps, Tooltip } from "antd";

interface IInputWithErrorMessage extends InputProps {
  errorMessage?: string;
}

const InputWithErrorMessage = ({
  errorMessage,
  status,
  ...props
}: IInputWithErrorMessage) => {
  const shouldShowMessage = !!status;

  return (
    <div css={{ position: "relative" }}>
      {!!shouldShowMessage && (
        <Tooltip title={errorMessage} defaultVisible placement="rightTop">
          <div
            css={{
              inset: "0",
              position: "absolute",
              backgroundColor: "red",
              zIndex: "-1",
            }}
          />
        </Tooltip>
      )}

      <Input {...props} status={status} />
    </div>
  );
};

export default InputWithErrorMessage;
