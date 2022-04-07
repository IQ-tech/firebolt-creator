import React from "react";

const onDragStart = (event: any, nodeType: string) => {
  event.dataTransfer.setData("nodeType", nodeType);
  event.dataTransfer.setData("stepCurrent", event.target.innerHTML);
  event.dataTransfer.effectAllowed = "move";
};

const SideBarFlow = ({ stepsTracks }: any) => {
  const optionStepStyle = {
    height: "28px",
    padding: "4px",
    border: "1px solid #1a192b",
    borderRadius: "2px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "grab",
  };

  return (
    <aside
      css={{
        maxWidth: "250px",
        borderRight: "1px solid #eee",
        padding: "15px 10px",
        fontSize: "12px",
        background: "#fcfcfc",
      }}
    >
      <h2 css={{ fontSize: "12px", fontWeight: 700 }}>
        You can chose any of the available steps
      </h2>

      {stepsTracks?.map((step: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, i: React.Key | null | undefined) => (
        <div
        key={i}
          css={[
            optionStepStyle,
            // {
            //   borderColor: `${
            //     i === 0
            //       ? "#0041d0"
            //       : i === stepsTracks?.length - 1
            //       ? "#ff0072"
            //       : null
            //   }`,
            // },
          ]}
          onDragStart={(event) =>
            onDragStart(
              event,"default"
              // `${
              //   i === 0
              //     ? "input"
              //     : i === stepsTracks?.length - 1
              //     ? "output"
              //     : "default"
              // }`
            )
          }
          draggable
        >
          {step}
        </div>
      ))}
    </aside>
  );
};

export default SideBarFlow;
