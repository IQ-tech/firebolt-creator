import { Layout } from "antd";
import StepsSidebar from "@/components/MainSidebar";
import StepFields from "@/components/StepFields";
import MainPreview from "@/components/MainPreview";

// import StepModal from '@/components/StepModal'
// import AddPropsModal from '@/components/AddPropsModal'

// <StepModal />
// <AddPropsModal />

const MainPage = () => {
  return (
    <Layout
      css={{
        flexDirection: "row",
        width: "100%",
      }}
    >
      <StepsSidebar />
      <StepFields />
      <MainPreview />
    </Layout>
  );
};

export default MainPage;
