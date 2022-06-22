import useAddPropsModal from './hook'

import { Modal, Button, Input, Table } from 'antd'
import { IField, IStep } from '@/types/fireboltJSON';

interface IAddPropsModal {
  field: IField;
  visibleStep: IStep
}

function AddPropsModal({ field, visibleStep }: IAddPropsModal) {
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
  console.log("🚀 ~ file: index.tsx ~ line 23 ~ AddPropsModal ~ visibleStep", visibleStep)

  let locale = {
    emptyText: '.',
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Config Props
      </Button>

      <Modal title={`${field.slug} - UI Props`} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={850}>
        <div className="table-container">
          <Table locale={locale} dataSource={[]} columns={columns} pagination={false} />

          <div className="flex column lines">
            { fieldProps.map((field, index) => (
              
              <div className="table__line" key={`${index}-table`}>

                <div className="label__input">
                  <Input 
                    value={field.propName}
                    onChange={(e) => handlePropsData(index, "propName", e.currentTarget.value)}
                  />
                </div>
                  
                <div className="label__input">
                  <Input 
                    // value={"field?.conditional"}
                    value={"working in progress"}
                    disabled
                   // onChange={(e) => handlePropsData(index, "conditional", e.currentTarget.value)}
                  />
                </div>

                <div>
                  <Input 
                    value={'field.type'}
                    onChange={(e) => handlePropsData(index, "type", e.currentTarget.value)}
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