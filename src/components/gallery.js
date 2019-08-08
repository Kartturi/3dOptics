import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      img9: file(relativePath: { eq: "trash9.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img10: file(relativePath: { eq: "trash10.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img14: file(relativePath: { eq: "trash14.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img15: file(relativePath: { eq: "trash15.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="gallery">
      <h3 className="gallery__title">Referenssit</h3>
      <div className="gallery__cases">
        <div className="gallery__case">
          <Img
            fluid={data.img9.childImageSharp.fluid}
            style={{ transition: "all .5s ease", maxHeight: "600px" }}
          ></Img>
          <p className="gallery__case_text">Saimaan Konfrenssitilat</p>
        </div>
        <div className="gallery__case">
          <Img
            fluid={data.img14.childImageSharp.fluid}
            style={{ maxHeight: "600px" }}
          ></Img>
          <p className="gallery__case_text">Miedon panimo</p>
        </div>
        <div className="gallery__case">
          <Img
            fluid={data.img15.childImageSharp.fluid}
            style={{ maxHeight: "600px" }}
          ></Img>
          <p className="gallery__case_text">Syrjämän Tietokeskus</p>
        </div>
        <div className="gallery__case">
          <Img
            fluid={data.img10.childImageSharp.fluid}
            style={{ maxHeight: "600px" }}
          ></Img>
          <p className="gallery__case_text">Miedon panimo</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
