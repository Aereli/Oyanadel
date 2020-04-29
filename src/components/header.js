import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo_1.svg"
import "../styles/header.css"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="left-side">
          <div className="logo">
            <Link to="/">
              <img id="logo" src={Logo} alt="logo"></img>
            </Link>
          </div>
          <div className="header-text">
            <div id="header-circle"></div>
            <p>Full Stack Web Developer </p>
            <p>From Miami, Florida</p>
          </div>
        </div>
        <div className="right-side">
          <Navbar expand="sm" className="justify-content-end">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="justify-content-end"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <div className="right-side-buttons">
            <button className="button">
              <Link>Github</Link>
            </button>
            <button className="button">
              <Link>LinkedIn</Link>
            </button>
            <button className="button">
              <Link>Resume</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
