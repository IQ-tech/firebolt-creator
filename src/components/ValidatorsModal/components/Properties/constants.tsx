import { Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import * as S from './styles'

interface IRenderAction {
	index: number, 
	remove: (index : number) => void
}

const renderValidatorProperty = () => <Input placeholder="Validator Property" />
const renderValue = () => <Input placeholder="Value" />
const renderAction = ({ index, remove } : IRenderAction) => (
	<Button css={S.buttonsStyles} type="link" size="large" onClick={() => remove(index)}>
		<DeleteOutlined />
	</Button>
)

export const columns = [
  {
	title: 'Validator Property',
	dataIndex: 'validator-property',
	key: 'validator-property',
	render: renderValidatorProperty
  },
  {
	title: 'Value',
	dataIndex: 'value',
	key: 'value',
	render: renderValue
  },
  {
	title: 'Action',
	dataIndex: 'action',
	key: 'action',
	render: renderAction
  }
]
