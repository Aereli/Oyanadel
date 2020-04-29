import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
