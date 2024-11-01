import React from "react"
import { Button } from "../../../../shared/ui/button"
import { useNavigate } from "react-router-dom"

export const ContactUs: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Button variant="contained" onClick={() => navigate("/user")}>
      Contact us
    </Button>
  )
}
