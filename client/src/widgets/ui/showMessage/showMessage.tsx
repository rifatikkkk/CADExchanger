import React from "react"
import { styled } from "@mui/material"
import { BigTitle } from "../../../shared/ui/bigTitle"

type Props = {
  children: string | React.ReactNode
}

const CustomUserOutput = styled("section")({
  padding: "28px 45px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#F5F5F5",
  flexGrow: 1,
})

export const ShowMessage: React.FC<Props> = ({ children }) => {
  return (
    <CustomUserOutput>
      <BigTitle>{children}</BigTitle>
    </CustomUserOutput>
  )
}
