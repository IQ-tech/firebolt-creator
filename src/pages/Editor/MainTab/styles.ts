export const contentStyles = {
  padding: "0 28px 28px 28px",
  flexDirection: "row",
  width: "100%",
  // justifyContent: "center",
}

export const contentSidebarStyles = {paddingRight: "19px",}

export const sidebarTitleStyles = (theme) => ({
  padding: "16px 24px", 
  margin:"0", 
  backgroundColor: theme?.colors?.white, 
  fontWeight: "500",
  fontSize: "16px",
}) 

export const dividerStyles = {margin: "0"}

// export const menuContentStyles = { width: "240px" }
export const menuContentStyles = { width: "240px", height: `${document.body.clientHeight}px`  };

export const addLinkStyles = (theme) => ({ color: theme?.colors?.["blue-cyan"] })

// export const collapseContentStyles = {width: "600px"}
export const collapseContentStyles = {width: "100%"}

export const widthStyles = {width: "100%"}

// export const inputContentStyles = {width: "279px"}