import React from "react"
import { styled } from "@mui/material/styles"
import MuiButton, { ButtonProps } from "@mui/material/Button"

type Props = {
  children: string
  variant: "text" | "outlined" | "contained"
}

const CustomButton = styled(MuiButton)<ButtonProps>(({ variant }) => ({
  background: "#2c2c2c",
  borderRadius: "10px",
  color: "white",
  variant: variant,
  fontSize: "16px",
  textTransform: "none",
  fontWeight: "normal",
  padding: "5px 47px",
}))

export const Button: React.FC<Props> = ({ children }) => {
  return <CustomButton>{children}</CustomButton>
}
