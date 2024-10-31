import React from "react"
import { styled } from "@mui/material"
import { Title } from "../../../shared/ui/title"
import { Button } from "../../../shared/ui/button"
import { Card } from "../../../shared/ui/card"

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
      <Title>Also very important title</Title>
      <CustomCards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CustomCards>
      <Button variant="contained">Contact us</Button>
    </CustomCardSection>
  )
}
