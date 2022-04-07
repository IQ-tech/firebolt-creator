import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import * as S from './styles'

interface ICollapseHeader {
	name: string;
	action: () => void
}

const CollapseHeader = ({ name, action } : ICollapseHeader) => {
	return (
		<header css={S.headerStyles}>
			<p css={S.textStyles}>{name}</p>
			<Button css={S.buttonsStyles} type="link" size="large" onClick={action}>
				<DeleteOutlined />
			</Button>
		</header>
	)
}

export default CollapseHeader
