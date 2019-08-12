import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const Gallery2 = props => {
  const data = useStaticQuery(graphql`
    query {
      img: file(relativePath: { eq: "gallery2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className="gallery__case"
      onClick={() => {
        props.callback()
      }}
    >
      <BackgroundImage
        Tag="div"
        className="gallery__background_img"
        fluid={data.img.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      ></BackgroundImage>
      <p className="gallery__case_text">Syrjämän konfrenssikeskus</p>
    </div>
  )
}

export default Gallery2
