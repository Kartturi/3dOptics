import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"

const Gallery1 = props => {
  const imageQuery = props.query
  console.log(imageQuery, "from gallery1")
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
        fluid={imageQuery}
        backgroundColor={`#040e18`}
      ></BackgroundImage>
      <p className="gallery__case_text">Syrjämän konfrenssikeskus</p>
    </div>
  )
}

export default Gallery1
