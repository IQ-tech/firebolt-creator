import { Modal, Tabs } from 'antd'

import Upload from "../Upload"
import JSONEditor from "../JSONEditor"
import Error from '../Error';

const { TabPane } = Tabs
interface IHandleEditor { 
  error: object;
  json: object;
  plainText: string;
}

interface IModalJSON {
	json: object;
	jsonError: string;
	isModalVisible: boolean;
	disableButton: boolean;
	handleOk: () => void;
	handleCancel: () => void;
	handleUpload: (event : object) => void;
	handleEditor: ({ error, json, plainText } : IHandleEditor) => void;
	handleTabChange: () => void;
  }


function ModalContent ({ json, jsonError, isModalVisible, disableButton, handleOk, handleCancel, handleUpload, handleEditor, handleTabChange } : IModalJSON) {
	return (
		<Modal title="Load Firebolt JSON" okButtonProps={{disabled: disableButton}} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
			 <Tabs defaultActiveKey="2" onChange={handleTabChange}>
				<TabPane tab="Paste JSON" key="paste">
					{jsonError &&  <Error message={jsonError} /> }
					<JSONEditor onChange={handleEditor} value={json} />
				</TabPane>
				<TabPane tab="Load file" key="load">
					{jsonError &&  <Error message={jsonError} /> }
					<Upload onChange={handleUpload} value={json} />
				</TabPane>
			</Tabs>
		</Modal>
	)
}

export default ModalContent