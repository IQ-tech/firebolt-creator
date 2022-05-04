import useAddPropsModal from './hook'

import { Modal, Button, Input, Table } from 'antd'

function AddPropsModal({ field, visibleStep }) {
  const {
    isModalVisible,
    fieldProps, 
    columns,
    
    showModal,
    handleOk,
    handleCancel,
    handlePropsData,
    addNewProp,
    deleteProp
  } = useAddPropsModal({ field, visibleStep })

  let locale = {
    emptyText: '.',
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Props
      </Button>

      <Modal title="Email - UI Props" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="table-container">
          <Table locale={locale} dataSource={[]} columns={columns} pagination={false} />

          <div className="flex column lines">
            { fieldProps.map((field, index) => (
              <div className="table__line" key={index}>
                <div className="label__input">
                  <Input 
                    value={field.propName}
                    onChange={(e) => handlePropsData(index, "propName", e.currentTarget.value)}
                  />
                </div>
                  
                <div className="label__input">
                  <Input 
                    value={field.value}
                    onChange={(e) => handlePropsData(index, "value", e.currentTarget.value)}
                  />
                </div>

                <Button type="link" onClick={() => deleteProp(index)}>
                  Delete
                </Button>
              </div>
            )) }
          </div>
        </div>

        <div className="button-container">
          <Button css={{ width: '100%', marginTop: '24px' }} type="dashed" onClick={addNewProp}>
            + Add props
          </Button>
        </div>
      </Modal>
    </>
  )
}

export default AddPropsModal