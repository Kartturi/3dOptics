import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hero = () => {
  const [virtualTour, setVirtualTour] = useState(false)
  const [currentTourId, setCurrentTourId] = useState(1)
  const [currentTourUrl, setCurrentTourUrl] = useState(
    "https://vt.plushglobalmedia.com/tour/TT167IBD6F/embed?fbclid=IwAR35i7z3whgB6y5kTp0FNwlK7JaeuxwX8xCf4j72DsrgUAzRM5MebmSKL88"
  )
  const [currentTourDesc, setCurrentTourDesc] = useState(
    "Omakotitalo sunnanviikissä"
  )

  const handleTourDisplay = (current, direction) => {
    const tourArr = [
      {
        id: 1,
        desc: "Omakotitalo",
        url:
          "https://vt.plushglobalmedia.com/tour/TT167IBD6F/embed?fbclid=IwAR35i7z3whgB6y5kTp0FNwlK7JaeuxwX8xCf4j72DsrgUAzRM5MebmSKL88",
      },

      {
        id: 2,
        desc: "Kokoustilat vuokralle",
        url:
          "https://vt.plushglobalmedia.com/tour/TT167OBLNC/embed?fbclid=IwAR0g0LW_33FJFdpYTs2Lu4ldWZEAlp4KQAi2TXwLTl6BIPsDcmxnl6IIS5w",
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

    setCurrentTourId(newCurrentNum)
    setCurrentTourDesc(tourArr[newCurrentNum - 1].desc)
    setCurrentTourUrl(tourArr[newCurrentNum - 1].url)
  }

  console.log(currentTourId, "asd")
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
              Tutustu virtuaalikierroksiin
            </button>
          </div>
        </div>
      ) : (
        <div className="hero-frame__container">
          <iframe
            className="hero-frame"
            src={`${currentTourUrl}`}
            frameBorder="0"
            style={{ position: "absolute", height: "85%", border: "none" }}
          ></iframe>
          <div className="hero-frame__arrows">
            <h5 className="hero-frame__title">{`${currentTourDesc}`}</h5>
            <FontAwesomeIcon
              onClick={() => {
                handleTourDisplay(currentTourId, "left")
              }}
              icon="arrow-left"
              size="3x"
              className="hero-frame__arrows_icon"
            />
            <FontAwesomeIcon
              onClick={() => {
                handleTourDisplay(currentTourId, "right")
              }}
              icon="arrow-right"
              size="3x"
              className="hero-frame__arrows_icon"
            />
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
