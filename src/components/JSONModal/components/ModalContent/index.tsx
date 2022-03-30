import { Modal, Tabs } from 'antd'
import Upload from "../Upload"
import JSONEditor from "../JSONEditor"

const { TabPane } = Tabs

interface IModalJSON {
	json: object;
	isModalVisible: boolean;
	disableButton: boolean;
	handleOk: Function;
	handleCancel: Function;
	handleUpload: Function;
	handleEditor: Function;
	handleTabChange: Function;
  }


function ModalContent ({ json, isModalVisible, disableButton, handleOk, handleCancel, handleUpload, handleEditor, handleTabChange } : IModalJSON) {	
	
	return (
		<Modal title="Load Firebolt JSON" okButtonProps={{disabled: disableButton}} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
			 <Tabs defaultActiveKey="2" onChange={handleTabChange as Function}>
				<TabPane tab="Paste JSON" key="paste">
					<JSONEditor onChange={handleEditor} value={json} />
				</TabPane>
				<TabPane tab="Load file" key="load">
					<Upload onChange={handleUpload} value={json} />
				</TabPane>
			</Tabs>
		</Modal>
	)
}

export default ModalContent