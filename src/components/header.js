import React from "react"
import "../styles/header.css"
import { Navbar, Nav } from "react-bootstrap"
import Window from "../images/green-window-SINGLE.png"
import Resume from "../images/Eric_Oyanadel_2020.pdf"
import Navigation from "./nav"

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="nav-container">
          <Navigation />
          <Navbar expand="sm" className="justify-content-end">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="justify-content-end"
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="right-side">
          <div className="header-text">
            <p>Full Stack Web Developer </p>
            <p>From Miami, Florida</p>
          </div>

          <div className="right-window">
            <img id="window" src={Window} alt="window"></img>
          </div>

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
