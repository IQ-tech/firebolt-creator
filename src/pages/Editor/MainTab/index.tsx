import { Layout } from "antd";
import MainSidebar from "@/components/MainSidebar";
import StepFields from "@/components/StepFields";
import MainPreview from "@/components/MainPreview";
import StepModal from "@/components/StepModal";
import MoveFieldModal from "@/components/MoveFieldModal";
import AddFieldModal from "@/components/AddFieldModal";

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
    isMoveFieldModalVisible,
    openMoveField,
    closeMoveField,
    movingField,
    currentJSON,
    isAddFieldModalOpen,
    closeAddField,
    openAddField,
    selectedTheme,
    setSelectedTheme,
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
        onOpenAddField={openAddField}
        onOpenMoveFields={openMoveField}
        isVisibleStepCustom={isVisibleStepCustom}
        stepsList={currentJSON.steps}
        selectedTheme={selectedTheme}
      />
      <MainPreview
        visibleStep={visibleStep}
        selectedTheme={selectedTheme}
        onChangeTheme={setSelectedTheme}
        isVisibleStepCustom={isVisibleStepCustom}
      />
      <StepModal
        isModalVisible={isAddStepModalOpen}
        onCloseModal={closeAddStepModal}
        editingStep={editingStep}
      />
      <MoveFieldModal
        visibleStep={visibleStep}
        stepsList={currentJSON.steps}
        movingField={movingField}
        onClose={closeMoveField}
        isVisible={isMoveFieldModalVisible}
      />

      <AddFieldModal
        visibleStep={visibleStep}
        isOpen={isAddFieldModalOpen}
        onClose={closeAddField}
      />
    </Layout>
  );
};

export default MainTab;
