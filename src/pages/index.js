import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Company from "../components/company"
import Contact from "../components/contact"
import SecondaryNav from "../components/secondaryNav"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ children }) => (
  <Layout>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <SEO title="Home" />
    <SecondaryNav></SecondaryNav>
    <Hero></Hero>
    <Services></Services>
    <Company></Company>
    <Contact></Contact>
  </Layout>
)

export default IndexPage
