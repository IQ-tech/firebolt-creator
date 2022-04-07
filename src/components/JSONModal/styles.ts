import {css} from "@emotion/react"

export const buttonsStyles = css({width: "172.27px"})

export const errorContainerStyle = css({
	display: "flex", 
	alignItems: "center",
	overflow: "hidden", 
	height: "60px", 
	width: "100%", 
	margin: "0px", 
	backgroundColor: "rgb(254, 236, 235)", 
	transitionDuration: "0.2s", 
	transitionTimingFunction: "cubic-bezier(0, 1, 0.5, 1)"
})

export const errorMessageStyle = css({
	display: "flex",
	color: "red",
	fontSize: "12px",
	width: "calc(100% - 60px)",
	height: "60px",
	boxSizing: "border-box",
	margin: "0px",
	padding: "0px 10px 0px 0px",
	overflowWrap: "break-word",
	flexDirection: "column",
	justifyContent: "center"
})

export const errorIconStyle = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "60px",
	width: "60px",
	margin: "0px",
	overflow: "hidden",
	verticalAlign: "top",
	pointerEvents: "none"
})
