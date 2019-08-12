import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import Overlay from "../components/overlay"
import Img from "gatsby-image"

const Gallery = () => {
  const [showProject, setShowProject] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "gallery3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      asd: file(relativePath: { eq: "gallery3.jpg" }) {
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

  const imageQueries = {
    img1: data.img1.childImageSharp.fluid,
    img2: data.asd.childImageSharp.fluid,
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
            fluid={imageQueries.img1}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Syrjämän konfrenssikeskus</p>
        </div>
        <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={imageQueries.img2}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Miedon panimo</p>
        </div>
        {/* <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img3.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Saimaan Konfrenssitilat</p>
        </div> */}
        {/* <div className="gallery__case" onClick={handleOnClick}>
          <BackgroundImage
            Tag="div"
            className="gallery__background_img"
            fluid={data.img4.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          ></BackgroundImage>
          <p className="gallery__case_text">Särmän teknologiakeskus</p>
        </div> */}
      </div>
    </div>
  )
}

export default Gallery
