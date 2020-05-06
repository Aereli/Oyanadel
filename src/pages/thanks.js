import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Thanks = () => (
  <Layout>
    <SEO title="thanks" />
    <div
      style={{
        height: "800px",
      }}
    >
      <div id="thanks-header">
        <h1>Message sent, thank you!</h1>
        <Link>
          <button id="thanks-btn">Home</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Thanks
