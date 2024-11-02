import React from "react"
import { styled } from "@mui/material"
import { FormData } from "../../../features/user/ui"
import { BigTitle } from "../../../shared/ui/bigTitle"

const CustomUserRegistration = styled("section")({
  padding: "28px 45px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "32px",
  backgroundColor: "#F5F5F5",
  flexGrow: 1,
})

export const Registration: React.FC = () => {
  return (
    <CustomUserRegistration>
      <BigTitle>Only CTA on the page</BigTitle>
      <FormData />
    </CustomUserRegistration>
  )
}
