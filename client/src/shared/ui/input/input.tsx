import React from "react"
import { styled, Input as MuiInput, InputProps } from "@mui/material"
import { Control, useController } from "react-hook-form"

type Props = {
  name: string
  type: "text" | "email"
  control: Control<any>
  minHeight?: string | undefined
}

const CustomInput = styled(MuiInput)<InputProps>({
  backgroundColor: "transparent",
  borderRadius: "10px",
  border: "1px solid #D9D9D9",
  padding: "10px 16px",
  color: "#1E1E1E",
  fontSize: "16px",
  margin: "0px",
  "::placeholder": "#B3B3B3",
})

export const Input: React.FC<Props> = ({ name, type, control, minHeight }) => {
  const { field } = useController({
    name,
    control,
  })

  return (
    <CustomInput
      multiline
      disableUnderline={true}
      disabled={false}
      id={name}
      onChange={field.onChange}
      type={type}
      placeholder="Value"
      inputProps={{
        style: {
          minHeight,
          padding: 0,
        },
      }}
    />
  )
}
