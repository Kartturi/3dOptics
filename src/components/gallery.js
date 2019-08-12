import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import Overlay from "../components/overlay"
import Gallery1 from "../components/galleries/gallery1"
import Gallery2 from "../components/galleries/gallery2"

const Gallery = () => {
  const [showProject, setShowProject] = useState(false)

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
        <Gallery1 callback={handleOnClick}></Gallery1>
        <Gallery2 callback={handleOnClick}></Gallery2>
      </div>
    </div>
  )
}

export default Gallery
