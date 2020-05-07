import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Thanks = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "staringOut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="thanks" />
      <div className="contact-background">
        <div id="thanks-header">
          <div>
            <h1>Message sent, thank you!</h1>
          </div>
          <div>
            <Link>
              <button id="thanks-btn">Home</button>
            </Link>
          </div>
        </div>
        <div id="contact-image">
          <Img fluid={data.file.childImageSharp.fluid} alt="Me Staring Out" />
        </div>
      </div>
    </Layout>
  )
}

export default Thanks
