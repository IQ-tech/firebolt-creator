import { css } from "@emotion/react";

export const contentStyles = (theme) => css(({
  backgroundColor: theme?.colors?.["grey"],
  backgroundImage: "url('../components/common/icons/backgroundRegisterPage.png')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
}))

export const globalIconStyles = css({
  minWidth: "100vw",
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "16px",
  paddingRight: "23px",
})

export const bigLogoStyles = css({paddingTop: "230px"})

export const contentButtonsStyles = css({paddingTop: "97px"})
  
export const buttonsStyles = css({width: "172.27px"})

export const footerStyles = css({paddingTop: "300px"})

export const copyrightStyles = css({color: "rgba(0, 0, 0, 0.25)"})