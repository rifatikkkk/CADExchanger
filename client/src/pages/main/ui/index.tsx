import React from "react"
import { Header } from "../../../widgets/ui/header"
import { styled } from "@mui/material"
import { WelcomeSection } from "../../../widgets/ui/welcomeSection"
import { CardSection } from "../../../widgets/ui/cardSection"
import { LessSection } from "../../../widgets/ui/lessSection"
import { Footer } from "../../../widgets/ui/footer"

const CustomMain = styled("main")({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "transparent",
})

export const Main: React.FC = () => {
  return (
    <>
      <Header />
      <CustomMain>
        <WelcomeSection />
        <CardSection />
        <LessSection />
      </CustomMain>
      <Footer />
    </>
  )
}
