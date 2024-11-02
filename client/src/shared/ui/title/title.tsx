import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string | React.ReactNode
  color: string
  fontSize: string | number
  alignText?: "center" | "left" | "right"
}

const CustomTitle = styled(Typography)<Props>(({ alignText }) => ({
  fontWeight: 700,
  textAlign: alignText,

  "@media (max-width: 1100px)": {
    textAlign: "center",
  },

  "@media (max-width: 500px)": {
    fontSize: "36px",
  },
}))

export const Title: React.FC<Props> = ({ children, fontSize, color }) => {
  return (
    <CustomTitle variant="h1" fontSize={fontSize} color={color}>
      {children}
    </CustomTitle>
  )
}
