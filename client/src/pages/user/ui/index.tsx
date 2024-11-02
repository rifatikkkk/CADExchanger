import React from "react"
import { Header } from "../../../widgets/ui/header"
import { Footer } from "../../../widgets/ui/footer"
import { useAppSelector } from "../../../app/hooks/hooks"
import { selectUser } from "../../../entities/user/slices/userSlice"
import { Registration } from "../../../widgets/ui/registration"
import { ShowMessage } from "../../../widgets/ui/showMessage"

export const User: React.FC = () => {
  const currentUser = useAppSelector(selectUser)

  return (
    <>
      <Header />
      {currentUser === null ? (
        <Registration />
      ) : (
        <ShowMessage>{currentUser.status}</ShowMessage>
      )}
      <Footer />
    </>
  )
}
