import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import Overlay from "../components/overlay"
import Img from "gatsby-image"

const Gallery = () => {
  const [showProject, setShowProject] = useState(false)

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

  const handleOnClick = () => {
    setShowProject(true)
  }

  const closeOverlay = () => {
    console.log("happened")
    setShowProject(false)
  }

  return (
    <div className="gallery">
      {showProject ? <Overlay display={closeOverlay}></Overlay> : ""}

      <h3 className="gallery__title">Referenssit</h3>
      <div className="gallery__cases">
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img9.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Syrjämän konfrenssikeskus</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img10.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Miedon panimo</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img14.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Saimaan Konfrenssitilat</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img15.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Särmän teknologiakeskus</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
