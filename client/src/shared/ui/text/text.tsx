import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string
  color: string
}

const CustomText = styled(Typography)({
  fontSize: "16px",
  fontWeight: 400,
})

export const Text: React.FC<Props> = ({ children, color }) => {
  return (
    <CustomText color={color} variant="subtitle2">
      {children}
    </CustomText>
  )
}
