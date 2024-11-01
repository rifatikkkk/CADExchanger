import React from "react"
import { styled } from "@mui/material"
import { Title } from "../../../shared/ui/title"
import { Text } from "../../../shared/ui/text"
import { CardVideo } from "../../../shared/ui/video"

const CustomWelcomeSection = styled("section")({
  padding: "28px 45px",
  backgroundColor: "#F5F5F5",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
})

const CustomContent = styled("article")({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  maxWidth: "420px",
})

export const WelcomeSection: React.FC = () => {
  return (
    <CustomWelcomeSection>
      <CustomContent>
        <Title color="#0C0C0D" fontSize="48px">
          Most important title on the page
        </Title>
        <Text color="#1E1E1E">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </Text>
      </CustomContent>
      <CardVideo />
    </CustomWelcomeSection>
  )
}
