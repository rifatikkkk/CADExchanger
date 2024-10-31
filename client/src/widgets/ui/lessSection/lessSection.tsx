import React from "react"
import { styled } from "@mui/material"
import { Title } from "../../../shared/ui/title"
import { Button } from "../../../shared/ui/button"

const CustomLessSection = styled("section")({
  padding: "77px 0 67px",
  backgroundColor: "#F5F5F5",
  display: "flex",
  flexDirection: "column",
  gap: "45px",
  alignItems: "center",
})

export const LessSection: React.FC = () => {
  return (
    <CustomLessSection>
      <Title>Less important title</Title>
      <Button variant="contained">Contact us</Button>
    </CustomLessSection>
  )
}
