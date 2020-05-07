import React from "react"
import "../styles/contact.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Navigation from "./nav"

const ContactForm = () => {
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
    <>
      <div className="contact-background">
        <div className="contact-nav">
          <Navigation />
          <Link id="home-link" to="/">
            Home
          </Link>
        </div>
        <div>
          <h3 className="contact-title">Send me a message!</h3>
        </div>

        <div className="contact-form">
          <form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <textarea
                name="message"
                placeholder="message me here.."
              ></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
        <div id="contact-image">
          <Img fluid={data.file.childImageSharp.fluid} alt="Me Staring Out" />
        </div>
      </div>
    </>
  )
}

export default ContactForm
