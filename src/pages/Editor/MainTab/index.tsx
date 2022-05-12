import { Layout } from "antd";
import StepsSidebar from "@/components/MainSidebar";
import StepFields from "@/components/StepFields";
import MainPreview from "@/components/MainPreview";
import StepModal from "@/components/StepModal";

import useMainTab from "./hook";

const MainTab = () => {
  const {
    visibleStep,
    setVisibleStep,
    isAddStepModalOpen,
    openAddStepModal,
    closeAddStepModal,
  } = useMainTab();
  return (
    <Layout
      css={{
        flexDirection: "row",
        width: "100%",
      }}
    >
      <StepsSidebar
        onOpenAddStep={openAddStepModal}
        visibleStep={visibleStep}
        setVisibleStep={setVisibleStep}
      />
      <StepFields visibleStep={visibleStep} />
      <MainPreview visibleStep={visibleStep} />
      <StepModal
        isModalVisible={isAddStepModalOpen}
        onCloseModal={closeAddStepModal}
      />
    </Layout>
  );
};

export default MainTab;
