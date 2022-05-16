import { Layout } from "antd";
import MainSidebar from "@/components/MainSidebar";
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
    openEditStepModal,
    editingStep,
    isVisibleStepCustom,
  } = useMainTab();
  return (
    <Layout
      css={{
        flexDirection: "row",
        width: "100%",
      }}
    >
      <MainSidebar
        onOpenAddStep={openAddStepModal}
        openEditStep={openEditStepModal}
        visibleStep={visibleStep}
        setVisibleStep={setVisibleStep}
      />
      <StepFields
        visibleStep={visibleStep}
        isVisibleStepCustom={isVisibleStepCustom}
      />
      <MainPreview
        visibleStep={visibleStep}
        isVisibleStepCustom={isVisibleStepCustom}
      />
      <StepModal
        isModalVisible={isAddStepModalOpen}
        onCloseModal={closeAddStepModal}
        editingStep={editingStep}
      />
    </Layout>
  );
};

export default MainTab;
