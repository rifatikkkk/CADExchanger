import React from "react"
import { BoxProps, Box, styled } from "@mui/material"
import { useSendUserMutation } from "../../../../entities/user/api/userApi"
import { User } from "../../../../entities/user/types/typeUser"
import { Text } from "../../../../shared/ui/text"
import { Input } from "../../../../shared/ui/input"
import { Button } from "../../../../shared/ui/button"
import { useForm } from "react-hook-form"

const CustomForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  padding: "24px",
  borderRadius: "10px",
  backgroundColor: "white",
  border: "1px solid #D9D9D9",
  width: "320px",

  "@media (max-width: 500px)": {
    maxWidth: "100%",
  },
})

const CustomInput = styled(Box)<BoxProps>({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
})

export const FormData: React.FC = () => {
  const [sendUser] = useSendUserMutation()

  const { handleSubmit, control } = useForm<User>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: User) => {
    try {
      if (data.name === "" || data.email === "" || data.message === "") {
        alert("You need fill all field!")
        return
      }

      await sendUser(data).unwrap()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <CustomInput>
        <Text color="#1E1E1E" isField={true}>
          Name
        </Text>
        <Input name="name" type="text" control={control} />
      </CustomInput>
      <CustomInput>
        <Text color="#1E1E1E" isField={true}>
          Email
        </Text>
        <Input name="email" type="email" control={control} />
      </CustomInput>
      <CustomInput>
        <Text color="#1E1E1E" isField={true}>
          Message
        </Text>
        <Input name="message" type="text" control={control} minHeight="80px" />
      </CustomInput>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </CustomForm>
  )
}
