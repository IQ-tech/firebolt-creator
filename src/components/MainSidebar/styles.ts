import { css } from "@emotion/react";

export const contentSidebarStyles = css({ paddingRight: "19px" });

export const dividerStyles = css({ margin: "0" });

export const sidebarTitleStyles = (theme) =>
  css({
    padding: "16px 24px",
    margin: "0",
    backgroundColor: theme?.colors?.white,
    fontWeight: "500",
    fontSize: "16px",
});

export const menuContentStyles = css({
  width: "240px",
  height: `${document.body.clientHeight}px`,
});