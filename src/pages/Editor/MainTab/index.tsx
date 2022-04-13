import { Layout } from "antd"
import StepsSidebar from "@/components/MainSidebar"
import StepFields from "@/components/StepFields"
import MainPreview from "@/components/MainPreview"
import * as S from "./styles"

// import StepModal from '@/components/StepModal'
// import AddPropsModal from '@/components/AddPropsModal'

// <StepModal />
// <AddPropsModal />

const MainPage = () => {
  return (
    <Layout css={S.contentStyles}>
      <StepsSidebar />
      <StepFields />
      <MainPreview />
    </Layout>
  );
};

export default MainPage
