import React from "react"
// import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <div>
      <SEO title="Home" />
      <Header></Header>
      <Projects />
    </div>
  </Layout>
)

export default IndexPage
