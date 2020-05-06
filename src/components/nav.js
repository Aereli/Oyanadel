import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo_2.svg"

const Navigation = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img id="logo" src={Logo} alt="logo"></img>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
