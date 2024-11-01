import React from "react"
import { styled } from "@mui/material"
import { Title } from "../../../shared/ui/title"
import { FormData } from "../../../features/user/ui"

const CustomUserRegistration = styled("section")({
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
      <Title color="#2C2C2C" fontSize="72px">
        Only CTA on the page
      </Title>
      <FormData />
    </CustomUserRegistration>
  )
}
