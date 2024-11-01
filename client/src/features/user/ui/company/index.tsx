import React from "react"
import { SubTitle } from "../../../../shared/ui/subtitle"
import { useNavigate } from "react-router-dom"

type Props = {
  children: string
}

export const Company: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()

  return <SubTitle onClick={() => navigate("/")}>{children}</SubTitle>
}
