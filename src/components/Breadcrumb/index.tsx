import { Breadcrumb } from "antd";

const BreadcrumbComponent = () => (
  <div
    css={(theme) => ({
      padding: "1px 24px 0",
      backgroundColor: theme?.colors?.white,
    })}
  >
    <Breadcrumb css={{ marginTop: "16px" }}>
      <Breadcrumb.Item>Experiences</Breadcrumb.Item>
      <Breadcrumb.Item>My Form</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export default BreadcrumbComponent;
