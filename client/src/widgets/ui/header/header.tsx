import React from "react"
import { styled } from "@mui/material/styles"
import { Company, ContactUs } from "../../../features/user/ui"

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
      <Company>Some Company</Company>
      <ContactUs />
    </CustomHeader>
  )
}
