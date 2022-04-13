import { Breadcrumb} from "antd"
import * as S from './styles'

const BreadcrumbComponent = () => (
    <div css={S.breadcrumbContent}>
      <Breadcrumb css={S.breadcrumbStyles}>
        <Breadcrumb.Item>Experiences</Breadcrumb.Item>
        <Breadcrumb.Item>My Form</Breadcrumb.Item>
      </Breadcrumb>
    </div>
)

export default BreadcrumbComponent