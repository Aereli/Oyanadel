import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo_2.svg"
import "../styles/header.css"
import { Navbar, Nav } from "react-bootstrap"
import Window from "../images/green-window-SINGLE.png"
import Resume from "../images/Eric_Oyanadel_2020.pdf"

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
          <div className="right-window">
            <img id="window" src={Window}></img>
          </div>
          <Navbar expand="sm" className="justify-content-end">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="justify-content-end"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <div className="right-side-buttons">
            <button className="button">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/eric-oyanadel/"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </button>
            <button className="button">
              <a
                target="_blank"
                href="https://github.com/Aereli"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </button>
            <button className="button">
              <a href={Resume} download>
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
