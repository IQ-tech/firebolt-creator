import { useState, useEffect } from "react";
import { useFireboltJSON } from "@/hooks/useFireboltJSON";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";


export default function useMainSidebar({ setVisibleStep }) {
  const { currentJSON, dispatch } = useFireboltJSON();
  const [steps, setSteps] = useState(handleSteps);
  const [keyControl, setKeyControl] = useState(0);

  const { confirm } = Modal;

  useEffect(() => {
    setSteps(() => handleSteps());
  }, [currentJSON]);

  function handleSteps() {
    const jsonSteps = currentJSON.steps;
    return jsonSteps;
  }

  function handleDeleteStep(slug: string) {
    dispatch({ type: "DELETE_STEP", payload: slug });
  }

  function showConfirm(slug) {
    confirm({
      title: `Do you want to delete this ${slug}?`,
      icon: <ExclamationCircleOutlined />,
      content: `Are you sure you want to do this`,
      onOk() {
        handleDeleteStep(slug);
      },
    });
  }
  function handleVisibleStep(slug: string) {
    const selectedStep = currentJSON.steps.find(
      (step) => step.step.slug === slug
    );

    setVisibleStep(selectedStep);
  }

  return {
    steps,
    handleVisibleStep,
    showConfirm,
    keyControl, 
    setKeyControl
  };
}
