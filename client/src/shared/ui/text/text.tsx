import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string
  color: string
  isField?: boolean
}

const CustomText = styled(Typography)<Props>(({ isField }) => ({
  fontSize: "16px",
  fontWeight: 400,

  "@media (max-width: 1100px)": {
    textAlign: isField ? "" : "center",
  },
}))

export const Text: React.FC<Props> = ({ children, color, isField }) => {
  return (
    <CustomText color={color} variant="subtitle2" isField={isField}>
      {children}
    </CustomText>
  )
}
