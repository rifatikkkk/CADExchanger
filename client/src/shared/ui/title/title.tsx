import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string | React.ReactNode
  color: string
  fontSize: string | number
}

const CustomTitle = styled(Typography)({
  fontWeight: 700,
})

export const Title: React.FC<Props> = ({ children, fontSize, color }) => {
  return (
    <CustomTitle variant="h1" fontSize={fontSize} color={color}>
      {children}
    </CustomTitle>
  )
}
