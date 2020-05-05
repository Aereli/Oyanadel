import React from "react"
import Img from "gatsby-image"
import "../styles/projects.css"
// import { Link } from "gatsby"

const Single = ({ image, title, url, description, sub, id, github }) => {
  return (
    <>
      <div className="indivdual-project-container">
        <div className="image">
          <div className="inner-image">
            <p className="inner-text">{title}</p>
            <p>{sub}</p>
            <p>{description}</p>
            <a>url {url}</a>
            <a>github {github}</a>
          </div>
          <Img key={id} fluid={image}></Img>
        </div>
      </div>
    </>
  )
}
export default Single
