import React from "react"
import Single from "./single"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const Info = useStaticQuery(graphql`
    {
      allProjectsJson {
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
    }
  `)
  console.log("this is data", Info)
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to  right, #e0d6cc 50%, #192231 50%)`,
      }}
    >
      <div></div>
      <Single value={Info} />
    </div>
  )
}

export default Projects
