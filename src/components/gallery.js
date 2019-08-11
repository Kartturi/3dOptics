import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import Overlay from "../components/overlay"
import Img from "gatsby-image"

const Gallery = () => {
  const [showProject, setShowProject] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "gallery1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "gallery2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "gallery3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img4: file(relativePath: { eq: "gallery4.jpg" }) {
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
    <div id="gallery" className="gallery">
      {showProject ? <Overlay display={closeOverlay}></Overlay> : ""}

      <h3 className="gallery__title">Referenssit</h3>
      <div className="gallery__cases">
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img1.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Syrjämän konfrenssikeskus</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img2.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Miedon panimo</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img3.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Saimaan Konfrenssitilat</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img4.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Särmän teknologiakeskus</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
