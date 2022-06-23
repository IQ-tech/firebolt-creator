import { useState, useEffect } from "react";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";

interface IFieldProps {
  propName: string;
  value: any | unknown;
  type: string;
}

export default function useAddPropsModal({ field, visibleStep }) {
  const { dispatch } = useFireboltJSON();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const defaultField = {
    propName: "",
    value: undefined,
    type: "Text",
  };

  const [fieldProps, setFieldProps] = useState<IFieldProps[]>(() => {
    const props = Object.entries(field["ui:props"]);
    const mappedProps = props.map(([key, value]) => ({
      type: JSON.stringify(value).includes("{" || "[") ? "JSON" : "Text",
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
      width: 120,
    },
    {
      title: "Conditional",
      dataIndex: "conditional",
      key: "conditional",
      width: 120,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 30,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: 160,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 15,
    },
  ];

  function showModal() {
    setIsModalVisible(true);
  }

  function handleOk() {
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }

  function handlePropsData(index: number, name: string, value: string) {
    const currentFields = [...fieldProps];

    if (name === "type" && value === "JSON") {
      currentFields[index]["value" as keyof IFieldProps] = { example: "example" }
    }
    currentFields[index][name as keyof IFieldProps] = value;

    setFieldProps(currentFields);

    const convertFieldPropsInObject = fieldProps.reduce((prop, key) => {
      key.propName ? (prop[key.propName] = key.value) : null;
      return prop;
    }, {});

    const newField = {
      ...field,
      ["ui:props"]: convertFieldPropsInObject,
    };

    const fieldToEditProps = { step: visibleStep.step.slug, field: newField };

    return dispatch({ type: "EDIT_FIELD_PROPS", payload: fieldToEditProps });
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
