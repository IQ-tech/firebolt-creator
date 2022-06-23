
import { validators } from '@iq-firebolt/validators'
import { Select, Collapse } from 'antd';

import CollapseHeader from '../CollapseHeader';
import Properties from '../Properties';

import * as S from './styles'

const { Option } = Select;
const { Panel } = Collapse;

interface ICollapseProperties {
	data: any[] ;
	remove: (index : number) => void;
}

const CollapseProperties = ({ data, remove } : ICollapseProperties) => {
	function handleChangeInput(value : any) {
	 // console.log(`selected ${value}`);
	}


	return (
		<Collapse defaultActiveKey={['0']} ghost>
			{data.map((field: any, index : number) => 
				<Panel header={<CollapseHeader name={`Validator ${field.key + 1}`} action={() => remove(index)} />} key={field.key + 1}>
				<div>
					<p>Validator Name</p>
					<Select mode="tags" style={{ width: '100%' }} placeholder="Validator Name" onChange={handleChangeInput}>
					{Object.keys(validators).map((validator, index) =>
					<Option key={index} value={validator}>{validator}</Option>
					)
						}
					</Select>
				</div>
				<div css={S.inputGroupStyles}>
					<p>Validator Properties</p>
					<Properties name={field.name} index={field.key + 1} />
				</div>
				</Panel>
			)}
		</Collapse>
	)
}

export default CollapseProperties
