import { Card, Select } from "antd"
import { FireboltForm } from "@iq-firebolt/client"
import BlueberryTheme from "@iq-firebolt/blueberry-theme" 
import { mockFields } from "@/pages/Editor/MainTab/mock";
import * as S from './styles'

const { Option } = Select;

const MainPreview = () => (
  <div css={S.previewContent}>
    <Card
      css={S.cardPreview}
      title="Preview"
      extra={
        <Select placeholder="Theme">
          <Option value="theme">Theme</Option>
        </Select>
      }
    >
      <FireboltForm theme={BlueberryTheme} schema={mockFields as any} />
    </Card>
  </div>
);

export default MainPreview