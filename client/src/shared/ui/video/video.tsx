import React from "react"
import { styled } from "@mui/material"

const CustomVideo = styled("iframe")({
  width: "530px",
  height: "235px",

  "@media (max-width: 1100px)": {
    width: "80%",
    height: "400px",
  },

  "@media (max-width: 980px)": {
    width: "100%",
    height: "400px",
  },

  "@media (max-width: 800px)": {
    height: "350px",
  },

  "@media (max-width: 700px)": {
    height: "300px",
  },

  "@media (max-width: 600px)": {
    height: "250px",
  },

  "@media (max-width: 500px)": {
    height: "200px",
  },

  "@media (max-width: 400px)": {
    height: "150px",
  },
})

export const CardVideo: React.FC = () => {
  return <CustomVideo src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
}
