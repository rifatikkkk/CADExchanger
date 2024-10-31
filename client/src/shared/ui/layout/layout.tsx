import React from "react"
import { styled } from "@mui/material/styles"
import Box, { BoxProps } from "@mui/material/Box"

type Props = {
  children: React.ReactElement[] | React.ReactElement | string
}

const LayoutComponent = styled(Box)<BoxProps>(() => ({
  padding: "0px 45px",
  backgroundColor: "transparent",
  height: "100%",
  overflow: "hidden",
}))

export const Layout: React.FC<Props> = ({ children }) => {
  return <LayoutComponent>{children}</LayoutComponent>
}
