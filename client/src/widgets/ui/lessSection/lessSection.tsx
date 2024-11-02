import React from "react"
import { styled } from "@mui/material"
import { Title } from "../../../shared/ui/title"
import { ContactUs } from "../../../features/user/ui"

const CustomLessSection = styled("section")({
  padding: "77px 0 67px",
  backgroundColor: "#F5F5F5",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "45px",
  alignItems: "center",
})

export const LessSection: React.FC = () => {
  return (
    <CustomLessSection>
      <Title color="#1E1E1E" fontSize="48px" alignText="center">
        Less important title
      </Title>
      <ContactUs />
    </CustomLessSection>
  )
}
