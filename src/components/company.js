import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Company = () => {
  const data = useStaticQuery(graphql`
    query {
      company: file(relativePath: { eq: "trash6.png" }) {
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
      <div className="company__left">
        <h3 className="company__left_title">360 kuvauspalvelu yrityksellesi</h3>
        <p className="company__left_para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <p className="company__left_para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <p className="company__left_para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div className="company__right">
        <div className="company__right_container">
          <Img
            fluid={data.company.childImageSharp.fluid}
            style={{ margin: "1rem", maxHeight: "calc(50vh - 4rem)" }}
            imgStyle={{ objectFit: "contain" }}
          ></Img>
        </div>
      </div>
    </div>
  )
}

export default Company
