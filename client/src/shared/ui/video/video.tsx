import React from "react"
import ReactPlayer from "react-player"

export const CardVideo: React.FC = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      controls={false}
      width={530}
      height={235}
    />
  )
}
