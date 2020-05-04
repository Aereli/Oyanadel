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
            github
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = Info.allProjectsJson.edges

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to  right, #e0d6cc 50%, #192231 50%)`,
      }}
    >
      {projects.map(({ node: data }, id) => {
        const title = data.title
        const sub = data.sub
        const description = data.description
        const image = data.image.childImageSharp.fluid
        const github = data.github
        const url = data.url
        return (
          <Single
            key={id}
            title={title}
            sub={sub}
            description={description}
            image={image}
            github={github}
            url={url}
          />
        )
      })}

      <div></div>
    </div>
  )
}

export default Projects