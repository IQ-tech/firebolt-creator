import { Outlet } from "react-router-dom";
import InternalHeader from "./InternalHeader";
import { Layout } from "antd";

const InternalLayouts = () => {
  return (
    <Layout>
      <InternalHeader />
      <Outlet />
    </Layout>
  );
};

export default InternalLayouts;
