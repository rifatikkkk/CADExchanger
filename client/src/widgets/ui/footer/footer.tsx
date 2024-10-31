import React from "react"
import { styled } from "@mui/material"
import { SubTitle } from "../../../shared/ui/subtitle"

const CustomFooter = styled("footer")({
  maxWidth: "100%",
  padding: "83px 0 84px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  borderTop: "1px solid #D9D9D9",
})

export const Footer: React.FC = () => {
  return (
    <CustomFooter>
      <SubTitle>Some Company 2024</SubTitle>
    </CustomFooter>
  )
}
