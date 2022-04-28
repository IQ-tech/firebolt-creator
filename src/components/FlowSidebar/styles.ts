export const defaultBtn = (isActive?: boolean) => {
  return {
    background: isActive ? "#e6f7ff" : "unset",
    height: "40px",
    width: "40px",
    border: "none",
    cursor: "pointer",
    ":hover": {
      opacity: 0.4
    },
  };
};

export const inputRename = (isActive: boolean) => {
    return {
        background: isActive ? "#e6f7ff" : "unset",
        height: "40px",
        width: "80%",
        border: "none",
        paddingLeft: "5px",
    };
  };

  export const containerOptionFlow = (isActive: boolean) => {
    return {
        background: isActive ? "#e6f7ff" : "unset",
        color: isActive ? "#1890ff" : "#000000d9",
        height: "40px",
        width: "100%",
        maxWidth: "240px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
    };
  };