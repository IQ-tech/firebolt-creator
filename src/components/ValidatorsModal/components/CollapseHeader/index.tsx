import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface ICollapseHeader {
  name: string;
  action: () => void;
}

const CollapseHeader = ({ name, action }: ICollapseHeader) => {
  return (
    <header
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <p
        css={{
          margin: "0",
        }}
      >
        {name}
      </p>

      <Button
        css={{ height: "fit-content" }}
        type="primary"
        danger
        icon={<DeleteOutlined />}
        onClick={action}
      />
    </header>
  );
};

export default CollapseHeader;
