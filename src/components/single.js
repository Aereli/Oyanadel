import React from "react"
import Img from "gatsby-image"
import "../styles/projects.css"
// import { Link } from "gatsby"

const Single = ({ image, title, url, description, sub, id, github }) => {
  return (
    <>
      <div className="indivdual-project-container">
        {/* <div className="image"></div> */}
        <Img key={id} fluid={image}></Img>
        <div className="inner-image">
          <p id="title">{title}</p>
          <p id="main-desc">{sub}</p>
          <div id="desc">
            <p>{description}</p>
          </div>
          <div id="links">
            <button className="button">
              <a href={github}>github</a>
            </button>
            <button className="button">
              <a href={url}>check out site</a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Single
