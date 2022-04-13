import { css } from "@emotion/react";

export const layoutStyles = css({ padding: '28px'})

export const pageHeaderStyles = css({padding: "16px 24px 0"})

export const moreButton = (theme) => (css({borderColor: theme?.colors?.["grey85"]}))