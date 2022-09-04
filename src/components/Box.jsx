import React from "react"

const Box = ({ content }) => {
  return (
    <div className="bg-yellow text-headline font-Noto font-bold p-4 hover:bg-white border border-headline">
      {content}
    </div>
  )
}

export default Box
