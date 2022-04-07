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
	  console.log(`selected ${value}`);
	}


	return (
		<Collapse defaultActiveKey={['1']} ghost>
			{data.map((field: any, index : number) => 
				<Panel header={<CollapseHeader name={`Validator ${field.key + 1}`} action={() => remove(index)} />} key={field.key + 1}>
				<div>
					<p>Validator Name</p>
					<Select mode="tags" style={{ width: '100%' }} placeholder="Validator Name" onChange={handleChangeInput}>
						<Option key={1}>Name 1</Option>
						<Option key={2}>Name 2</Option>
						<Option key={3}>Name 3</Option>
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
