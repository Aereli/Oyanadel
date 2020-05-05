import React from "react"

const Nav = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/">
          <img id="logo" src={Logo} alt="logo"></img>
        </Link>
      </div>
      {/* <div className="header-text">
          <div id="header-circle"></div>
          <p>Full Stack Web Developer </p>
          <p>From Miami, Florida</p>
        </div> */}
    </div>
  )
}

export default Nav
