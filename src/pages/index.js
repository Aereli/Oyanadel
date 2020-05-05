import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header></Header>
    <Projects />
    <Footer />
  </Layout>
)

export default IndexPage
