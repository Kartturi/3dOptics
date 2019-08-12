import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import Overlay from "../components/overlay"
import Gallery1 from "../components/galleries/gallery1"
import Img from "gatsby-image"

const Gallery = () => {
  const [showProject, setShowProject] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "gallery4.jpg" }) {
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

  const imageQueries = {
    img1: data.img1.childImageSharp.fluid,
    img2: data.img2.childImageSharp.fluid,
    img3: data.img3.childImageSharp.fluid,
    img4: data.img4.childImageSharp.fluid,
  }

  return (
    <div id="gallery" className="gallery">
      {showProject ? <Overlay display={closeOverlay}></Overlay> : ""}

      <h3 className="gallery__title">Referenssit</h3>
      <div className="gallery__cases">
        <Gallery1 query={imageQueries.img1} callback={handleOnClick}></Gallery1>
        <Gallery1 query={imageQueries.img3} callback={handleOnClick}></Gallery1>
        <Gallery1 query={imageQueries.img2} callback={handleOnClick}></Gallery1>
        <Gallery1 query={imageQueries.img4} callback={handleOnClick}></Gallery1>
      </div>
    </div>
  )
}

export default Gallery
