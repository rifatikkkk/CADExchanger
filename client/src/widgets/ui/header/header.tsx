import React from "react"
import { styled } from "@mui/material/styles"
import { Button } from "../../../shared/ui/button"
import { SubTitle } from "../../../shared/ui/subtitle"

const CustomHeader = styled("header")({
  maxWidth: "100%",
  padding: "33px 45px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #D9D9D9",
})

export const Header: React.FC = () => {
  return (
    <CustomHeader>
      <SubTitle>Some Company</SubTitle>
      <Button variant="contained">Contact us</Button>
    </CustomHeader>
  )
}
