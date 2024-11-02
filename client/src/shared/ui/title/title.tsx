import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string | React.ReactNode
  color: string
  fontSize: string | number
  textAlign?: string
}

const CustomTitle = styled(Typography)({
  fontWeight: 700,

  "@media (max-width: 1100px)": {
    textAlign: "center",
  },

  "@media (max-width: 500px)": {
    fontSize: "36px",
  },
})

export const Title: React.FC<Props> = ({
  children,
  fontSize,
  color,
  textAlign,
}) => {
  return (
    <CustomTitle
      variant="h1"
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
    >
      {children}
    </CustomTitle>
  )
}
