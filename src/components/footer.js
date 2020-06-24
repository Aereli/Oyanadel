import React from "react"

const Footer = () => {
  return (
    <div
      style={{
        height: `50px`,
        width: `100vw`,
        backgroundColor: `#192231`,
        color: `#E0D6CC`,
        paddingBottom: `1rem`,
        textAlign: `center`,
        fontFamily: `skia`,
      }}
    >
      © {new Date().getFullYear()}, Built from Scratch using Gatsby
    </div>
  )
}

export default Footer
