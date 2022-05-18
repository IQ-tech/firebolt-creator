import { css } from "@emotion/react"

export const containerSidebarFlow = css({
  maxWidth: "300px",
  borderRight: "1px solid #eee",
  padding: "15px 10px",
  fontSize: "12px",
  background: "#fcfcfc",
})

export const titleSideBarFlow = css({ 
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: 700,
  height: "20px" 
})

export const optionStepStyle = css({
  height: "28px",
  padding: "4px",
  border: "1px solid #1a192b",
  borderRadius: "2px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "grab",
})
