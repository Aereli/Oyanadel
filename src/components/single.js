import React from "react"
import Img from "gatsby-image"
import "../styles/projects.css"
// import { Link } from "gatsby"

const Single = ({ image, title, url, description, sub, id, github }) => {
  return (
    <>
      <div className="indivdual-project-container">
        <div className="line"></div>
        <Img key={id} fluid={image}></Img>
        <div className="inner-image">
          <p id="title">{title}</p>
          <p id="main-desc">{sub}</p>
          <div id="desc">
            <p>{description}</p>
          </div>
          <div id="links">
            <button className="button">
              <a href={github} target="_blank" rel="noopener noreferrer">
                View Github
              </a>
            </button>
            <button className="button">
              <a href={url} target="_blank" rel="noopener noreferrer">
                View The Site
              </a>
            </button>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </>
  )
}
export default Single
