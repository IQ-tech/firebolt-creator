import { Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

const { Dragger } : { Dragger : Function} = Upload

interface IModalContent {
	value: object;
	onChange: Function
}

function ModalContent ( { value, onChange } : IModalContent ) {
	const props = {
		accept: "application/JSON",
		openFileDialogOnClick: true,
		action: onChange,
		onChange,
		name: 'json-file',
		showUploadList: true,
	  };

	return (
		<Upload fileList={value as object}>
			<Dragger {...props}>
				<p className="ant-upload-drag-icon">
				<InboxOutlined />
				</p>
				<p className="ant-upload-text">Click or drag file to this area to upload</p>
				<p className="ant-upload-hint">
				Support for a single or bulk upload. Strictly prohibit from uploading company data or other
				band files
				</p>
			</Dragger>
		</Upload>
	)
}

export default ModalContent