import { css } from "@emotion/react";

export const contentStyles = css({
  padding: "0 28px 28px 28px",
  flexDirection: "row",
  width: "100%",
});

export const contentSidebarStyles = css({ paddingRight: "19px" });

export const sidebarTitleStyles = (theme) =>
  css({
    padding: "16px 24px",
    margin: "0",
    backgroundColor: theme?.colors?.white,
    fontWeight: "500",
    fontSize: "16px",
  });

export const dividerStyles = css({ margin: "0" });

// export const menuContentStyles = { width: "240px" }
export const menuContentStyles = css({
  width: "240px",
  height: `${document.body.clientHeight}px`,
});

export const addLinkStyles = (theme) =>
  css({ color: theme?.colors?.["blue-cyan"] });

// export const collapseContentStyles = {width: "600px"}
export const collapseContentStyles = { width: "100%" };

export const widthStyles = { width: "100%" };
