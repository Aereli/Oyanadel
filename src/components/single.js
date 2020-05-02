import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/projects.css"

const Single = ({ ...props }) => {
  console.log(props.value.allProjectsJson)
  const Json = props.value.allProjectsJson

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

      query: allProjectsJson {
        edges {
          node {
            title
            sub
            slug
            url
            description
            image {
              src {
                id
              }
            }
          }
        }
      }

      allImageContent: allImageSharp {
        edges {
          node {
            fluid(maxWidth: 300) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log("query:", Image.query)
  console.log("images:", Image.allImageContent)

  return (
    <>
      <div className="project-container">
        {Image.allFile.edges.map(d => (
          <div className="image">
            <div className="inner-image">
              {Image.query.edges.map(
                data => (
                  console.log("inside", data),
                  (<p className="inner-text">{data.node.title} </p>)
                )
              )}
              {/* {console.log(d.node)} */}
              <p className="inner-text">{Json.title}this is some text</p>
            </div>
            <Img
              key={d.node.id}
              fluid={d.node.childImageSharp.fluid}
              alt="project"
            ></Img>
          </div>
        ))}
      </div>
    </>
  )
}
export default Single
