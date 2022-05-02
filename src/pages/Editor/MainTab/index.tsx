import { Layout } from "antd";
import StepsSidebar from "@/components/MainSidebar";
import StepFields from "@/components/StepFields";
import MainPreview from "@/components/MainPreview";

// import StepModal from '@/components/StepModal'
// import AddPropsModal from '@/components/AddPropsModal'

// <StepModal />
// <AddPropsModal />

import { useFireboltJSON } from '@/hooks/useFireboltJSON'

const MainPage = () => {
  const { visibleStep } = useFireboltJSON()
  return (
    <Layout
      css={{
        flexDirection: "row",
        width: "100%",
      }}
    >
      <StepsSidebar />
      <StepFields visibleStep={visibleStep} />
      <MainPreview />
    </Layout>
  );
};

export default MainPage;
