import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string
}

const CustomSubTitle = styled(Typography)({
  color: "#1E1E1E",
  fontSize: "24px",
  fontWeight: 700,
})

export const SubTitle: React.FC<Props> = ({ children }) => {
  return <CustomSubTitle variant="h3">{children}</CustomSubTitle>
}
