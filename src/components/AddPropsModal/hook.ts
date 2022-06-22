import { useState, useEffect } from "react";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

interface IFieldProps {
  propName: string;
  value: any;
}

export default function useAddPropsModal({ field, visibleStep }) {
  const { dispatch } = useFireboltJSON();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const defaultField = {
    propName: "",
    value: "",
  };

  const [fieldProps, setFieldProps] = useState<IFieldProps[]>(() => {
    const props = Object.entries(field["ui:props"]);
    const mappedProps = props.map(([key, value]) => ({
      propName: key,
      value,
    }));
    return mappedProps;
  });

  const columns = [
    {
      title: "Prop Name",
      dataIndex: "propName",
      key: "propName",
      width: 155,
    },
    {
      title: "Conditional",
      dataIndex: "conditional",
      key: "conditional",
      width: 155,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 155,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: 155,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 74,
    },
  ];

  function showModal() {
    setIsModalVisible(true);
  }

  function handleOk() {
    const convertFieldPropsInObject = fieldProps.reduce((prop, key) => {
      key.propName ? prop[key.propName] = key.value : null;
      return prop;
    }, {});

    const newField = {
      ...field,
      ["ui:props"]: convertFieldPropsInObject,
    };

    const fieldToEditProps = { step: visibleStep.step.slug, field: newField };

    dispatch({ type: "EDIT_FIELD_PROPS", payload: fieldToEditProps });

    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  function handlePropsData(index: number, name: string, value: string) {
    const currentFields = [...fieldProps];

    currentFields[index][name as keyof IFieldProps] = value;

    setFieldProps(currentFields);
  }

  function addNewProp() {
    const currentFields = [...fieldProps];

    currentFields.push(defaultField);

    setFieldProps(currentFields);
  }

  function deleteProp(index: number) {
    const currentFields = [...fieldProps];

    currentFields.splice(index, 1);

    setFieldProps(currentFields);
  }

  return {
    isModalVisible,
    fieldProps,
    columns,

    showModal,
    handleOk,
    handleCancel,
    handlePropsData,
    addNewProp,
    deleteProp,
  };
}
