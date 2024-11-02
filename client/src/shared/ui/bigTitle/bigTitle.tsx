import React from "react"
import { styled, Typography } from "@mui/material"

type Props = {
  children: string | React.ReactNode
}

const CustomTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "72px",
  textAlign: "center",
  color: "#2C2C2C",

  "@media (max-width: 800px)": {
    fontSize: "48px",
  },

  "@media (max-width: 500px)": {
    fontSize: "36px",
  },
})

export const BigTitle: React.FC<Props> = ({ children }) => {
  return <CustomTitle variant="h1">{children}</CustomTitle>
}
