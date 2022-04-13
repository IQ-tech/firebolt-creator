import { css } from "@emotion/react"

export const headerContent = (theme) => (css({
  color: theme?.colors?.["white"],
  backgroundColor: "#001529",
  width: "100%",
  height: "48px",
  fontWeight: 500,
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  padding: "0 16px",
  justifyContent: "space-between",
}))

export const logoStyles = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
})

export const docsLinkContent = css({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  maxHeight: "48px"
})

export const docsLink = css({
  color: "white",
  textDecoration: "none",
  cursor: "pointer"
})
