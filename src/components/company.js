import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Company = () => {
  const data = useStaticQuery(graphql`
    query {
      company: file(relativePath: { eq: "nico.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      company1: file(relativePath: { eq: "company3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="company">
      <h3 className="company__title">360 kuvat yrityksesi tueksi</h3>
      <div className="company__container">
        <div className="company__left">
          <h3 className="company__left_title">Mitäs sitten?</h3>
          <p className="company__left_para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="company__right">
          <Img
            fluid={data.company.childImageSharp.fluid}
            style={{ margin: "1rem" }}
            imgStyle={{ objectFit: "contain" }}
          ></Img>

          <p>My name is nico, and I am very special boy</p>
          <p>I like cats and 2d anime grilss</p>
        </div>
      </div>
    </div>
  )
}

export default Company
