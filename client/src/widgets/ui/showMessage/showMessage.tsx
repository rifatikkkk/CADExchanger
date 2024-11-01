import React from "react"
import { styled } from "@mui/material"
import { Title } from "../../../shared/ui/title"

type Props = {
  children: string | React.ReactNode
}

const CustomUserOutput = styled("section")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#F5F5F5",
  flexGrow: 1,
})

export const ShowMessage: React.FC<Props> = ({ children }) => {
  return (
    <CustomUserOutput>
      <Title color="#2C2C2C" fontSize="72px">
        {children}
      </Title>
    </CustomUserOutput>
  )
}
