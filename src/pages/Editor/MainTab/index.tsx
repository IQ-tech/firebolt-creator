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
  const { visibleStep, setVisibleStep } = useFireboltJSON()
  return (
    <Layout
      css={{
        flexDirection: "row",
        width: "100%",
      }}
    >
      <StepsSidebar setVisibleStep={setVisibleStep} />
      <StepFields visibleStep={visibleStep} />
      <MainPreview visibleStep={visibleStep} />
    </Layout>
  );
};

export default MainPage;
