import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Hero = () => {
  const [virtualTour, setVirtualTour] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [randomText, setRandomText] = useState(
    "Virtuaalikierrokset asuntokauppojen tueksi"
  )
  const [currentTourId, setCurrentTourId] = useState(1)
  const [currentTourUrl, setCurrentTourUrl] = useState(
    "https://vt.plushglobalmedia.com/tour/TT167IBD6F/embed?fbclid=IwAR35i7z3whgB6y5kTp0FNwlK7JaeuxwX8xCf4j72DsrgUAzRM5MebmSKL88"
  )
  const [currentTourDesc, setCurrentTourDesc] = useState(
    "Omakotitalo sunnanviikissä"
  )

  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "trash17.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleTourDisplay = (current, direction) => {
    const tourArr = [
      {
        id: 1,
        desc: "1.Omakotitalo",
        url:
          "https://vt.plushglobalmedia.com/tour/TT167IBD6F/embed?fbclid=IwAR35i7z3whgB6y5kTp0FNwlK7JaeuxwX8xCf4j72DsrgUAzRM5MebmSKL88",
        title: "Virtuaalikierrokset asuntokauppojen tueksi",
      },

      {
        id: 2,
        desc: "2.Kokoustilat vuokralle",
        url:
          "https://vt.plushglobalmedia.com/tour/TT167OBLNC/embed?fbclid=IwAR0g0LW_33FJFdpYTs2Lu4ldWZEAlp4KQAi2TXwLTl6BIPsDcmxnl6IIS5w",
        title: "Näytä asiakkaillesi hienot tilasi ennen vierailua",
      },
    ]

    let newCurrentNum
    if (direction === "left") {
      if (current === 1) {
        newCurrentNum = tourArr.length
      } else {
        newCurrentNum = current - 1
      }
    } else {
      if (current === tourArr.length) {
        newCurrentNum = 1
      } else {
        newCurrentNum = current + 1
      }
    }
    setShowTitle(false)
    setTimeout(() => {
      setShowTitle(true)
    }, 7000)
    setCurrentTourId(newCurrentNum)
    setRandomText(tourArr[newCurrentNum - 1].title)
    setCurrentTourDesc(tourArr[newCurrentNum - 1].desc)
    setCurrentTourUrl(tourArr[newCurrentNum - 1].url)
  }

  const imageData = data.hero.childImageSharp.fluid
  return (
    <div id="hero" className="hero">
      {!virtualTour ? (
        <BackgroundImage
          Tag="div"
          className="hero__background_img"
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="hero__init">
            <div className="hero__title_container_init">
              <h2 className="hero__title_text_init">
                360 kuvat ja VR-kierrokset liiketoiminnan tueksi
              </h2>
              <div className="hero__cta">
                <button
                  className="hero__cta_btn"
                  onClick={e => {
                    setVirtualTour(true)
                  }}
                >
                  Tutustu virtuaalikierroksiin
                </button>
              </div>
            </div>
          </div>
        </BackgroundImage>
      ) : (
        <div className="hero-frame__container">
          <div
            onClick={() => {
              setShowTitle(false)
            }}
            className="hero__title_container"
          >
            {showTitle ? (
              <h2 className="hero__title_text">{randomText}</h2>
            ) : (
              ""
            )}
          </div>
          <div className="hero-frame_top">
            <iframe
              onLoad={() => {
                setTimeout(() => {
                  setShowTitle(true)
                }, 7000)
              }}
              className="hero-frame"
              src={`${currentTourUrl}`}
              frameBorder="0"
              style={{ position: "absolute", height: "80%", border: "none" }}
            ></iframe>
          </div>

          <div className="hero-frame__arrows">
            <h5 className="hero-frame__title">{`${currentTourDesc}`}</h5>
            <div className="hero__icon_container">
              <FontAwesomeIcon
                onClick={() => {
                  handleTourDisplay(currentTourId, "left")
                }}
                icon="arrow-left"
                size="2x"
                className="hero-frame__arrows_icon"
              />
              <FontAwesomeIcon
                onClick={() => {
                  handleTourDisplay(currentTourId, "right")
                }}
                icon="arrow-right"
                size="2x"
                className="hero-frame__arrows_icon"
              />
            </div>
          </div>
        </div>
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
