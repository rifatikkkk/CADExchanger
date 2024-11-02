import React from "react"
import { Box, BoxProps, styled } from "@mui/material"
import { SubTitle } from "../subtitle"
import { Text } from "../text"

const CustomCard = styled(Box)<BoxProps>({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "33.33%",
  boxSizing: "border-box",

  "@media (max-width: 500px)": {
    width: "50%",
  },
})

export const Card: React.FC = () => {
  return (
    <CustomCard>
      <SubTitle>Title</SubTitle>
      <Text color="#757575" isField={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
        leo et condimentum
      </Text>
    </CustomCard>
  )
}
