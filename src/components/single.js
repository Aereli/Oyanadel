import React from "react"
import Img from "gatsby-image"
import "../styles/projects.css"
// import { Link } from "gatsby"

const Single = ({ image, title, description, sub, id, github, url }) => {
  return (
    <>
      <div className="project-container">
        <div className="image">
          <div className="inner-image">
            <p className="inner-text">{title}</p>
            <p>{sub}</p>
            <p>{description}</p>
            <a>{url}</a>
            <a>{github}</a>
          </div>
          <Img key={id} fluid={image}></Img>
        </div>
      </div>
    </>
  )
}
export default Single
