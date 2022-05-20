import { Spin } from "antd";

const TabLoader = () => {
  return (
    <div
      css={{
        width: "100%",
        height: "100%",
        minHeight: "100px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default TabLoader;
