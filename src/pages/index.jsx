import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Card from '../components/Card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Card />
  </Layout>
)

export default IndexPage
