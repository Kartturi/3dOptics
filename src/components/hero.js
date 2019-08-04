import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { useState } from "react"

const Hero = ({ logo }) => {
  const [virtualTour, setVirtualTour] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "trash1_min.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="hero">
      {!virtualTour ? (
        <div className="hero__init">
          <div className="hero__title_container">
            <h2 className="hero__title_text">
              360 kuvat ja VR-kierrokset liiketoiminnan tueksi
            </h2>
          </div>
          <div className="hero__cta">
            <button
              className="hero__cta_btn"
              onClick={e => {
                setVirtualTour(true)
              }}
            >
              Tutustu virtuaalikierrokseen
            </button>
          </div>
        </div>
      ) : (
        <iframe
          className="hero-frame"
          src="https://vt.plushglobalmedia.com/tour/TT167IBD6F/embed?fbclid=IwAR35i7z3whgB6y5kTp0FNwlK7JaeuxwX8xCf4j72DsrgUAzRM5MebmSKL88"
          frameborder="0"
          style={{ position: "absolute", height: "100%", border: "none" }}
        ></iframe>
      )}
    </div>
  )
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  logo: ``,
}

export default Hero
