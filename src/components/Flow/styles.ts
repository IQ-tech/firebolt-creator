import { css } from "@emotion/react";

export const styleCard = css({ width: "100%" })

export const mainCard = css({
  width: "100%",
  height: `${document.body.clientHeight / 1.45}px`,
  background: "#FFFFFF",
  flexDirection: "row",
  display: "flex",
  flexGrow: "1",
})

export const styleReactFlow = css({ flexGrow: "1" })

export const controlsSave = css({
  position: "absolute",
  right: "10px",
  top: "10px",
  zIndex: 4,
  fontSize: "12px",
})

export const buttonsSRC = css({
  marginLeft: "10px",
  padding: "3px 5px",
  cursor: "pointer",
})
