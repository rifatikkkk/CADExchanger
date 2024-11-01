import React from "react"
import { styled } from "@mui/material"
import { Title } from "../../../shared/ui/title"
import { Card } from "../../../shared/ui/card"
import { ContactUs } from "../../../features/user/ui"

const CustomCardSection = styled("section")({
  padding: "48px 45px 43px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
})

const CustomCards = styled("article")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "74px 0",
  flexWrap: "wrap",
  margin: "100px 0 74px",
})

export const CardSection: React.FC = () => {
  return (
    <CustomCardSection>
      <Title color="#1E1E1E" fontSize="48px">
        Also very important title
      </Title>
      <CustomCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CustomCards>
      <ContactUs />
    </CustomCardSection>
  )
}
