import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/single.css"

const Single = props => {
  console.log("this is props", props)
  const Image = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "projects" }
        }
      ) {
        edges {
          node {
            id
            name
            birthTime
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  // console.log(Image.allFile.edges.node.childImageSharp.fluid)
  return (
    <>
      <div className="project-container">
        {Image.allFile.edges.map(d => (
          <div>
            <Img id="image" fluid={d.node.childImageSharp.fluid}></Img>
          </div>
        ))}
      </div>
    </>
  )
}
export default Single
