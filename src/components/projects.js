import React from "react"
import Single from "./single"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/projects.css"

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
            video
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
    <div className="project-container">
      <div className="project-margin">
        <div className="project-middle">
          {projects.map(({ node: data }, id) => {
            const title = data.title
            const sub = data.sub
            const description = data.description
            const image = data.image.childImageSharp.fluid
            const github = data.github
            const url = data.url
            const video = data.video
            return (
              <Single
                key={id}
                title={title}
                sub={sub}
                description={description}
                image={image}
                github={github}
                url={url}
                video={video}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
