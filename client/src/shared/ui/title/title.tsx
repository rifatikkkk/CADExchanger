import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string
}

const CustomTitle = styled(Typography)({
  color: "#0C0C0D",
  fontSize: "48px",
  fontWeight: 700,
})

export const Title: React.FC<Props> = ({ children }) => {
  return <CustomTitle variant="h1">{children}</CustomTitle>
}
