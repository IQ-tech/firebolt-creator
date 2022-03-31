import useAddPropsModal from './hook'

import 'antd/dist/antd.css'

import { Modal, Button, Input, Table } from 'antd'

function AddPropsModal() {

  const inputComponent = <Input 
    onChange={(e) => handleStepData("slug", e.currentTarget.value)}
  />

  const buttonComponent = <Button type="link" onClick={() => deleteProp(1)}>
    Delete
  </Button>

  const {
    isModalVisible,
    fieldProps, 
    columns,
    
    setFieldProps,
    showModal,
    handleOk,
    handleCancel,
    handleStepData,
    getNewKey,
    deleteProp
  } = useAddPropsModal(inputComponent, buttonComponent)

  let locale = {
    emptyText: '.',
  };

  function addNewProp() {
    const newKey = getNewKey()

    const updatedFieldProps = {
      key: newKey,
      propName: inputComponent,
      value: inputComponent,
      action: <Button type="link" onClick={() => deleteProp(newKey)}>
        Delete
      </Button>
    }

    const current = [...fieldProps]

    setFieldProps([...current, updatedFieldProps])
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Props
      </Button>

      <Modal title="Email - UI Props" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="table-container">
          <Table locale={locale} dataSource={[]} columns={columns} pagination={false} />

          <div className="flex column lines">
            { fieldProps.map((field) => (
              <div className="table__line">
                <div className="label__input">
                  <Input 
                    onChange={(e) => handleStepData("slug", e.currentTarget.value)}
                  />
                </div>
                  
                <div className="label__input">
                  <Input 
                    onChange={(e) => handleStepData("slug", e.currentTarget.value)}
                  />
                </div>

                <Button type="link" onClick={() => deleteProp(1)}>
                  Delete
                </Button>
              </div>
            )) }
          </div>
        </div>

        <div className="button-container">
          <Button style={{ width: '100%', marginTop: '24px' }} type="dashed" onClick={addNewProp}>
            + Add props
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default AddPropsModal