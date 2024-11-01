import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

const CustomSubTitle = styled(Typography)({
  color: "#1E1E1E",
  fontSize: "24px",
  fontWeight: 700,
  cursor: "pointer",
})

export const SubTitle: React.FC<Props> = ({ children, onClick }) => {
  return (
    <CustomSubTitle onClick={onClick} variant="h3">
      {children}
    </CustomSubTitle>
  )
}
