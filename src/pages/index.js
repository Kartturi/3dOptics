import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Service2 from "../components/service2"
import Company from "../components/company"
import Contact from "../components/contact"
import Gallery from "../components/gallery"
import SecondaryNav from "../components/secondaryNav"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ children }) => (
  <Layout>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Pacifico|Roboto:300,400,500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <SEO title="Home" />
    <SecondaryNav></SecondaryNav>
    <Hero></Hero>
    <Service2></Service2>
    <Company></Company>
    <Gallery></Gallery>
    <Contact></Contact>
  </Layout>
)

export default IndexPage
