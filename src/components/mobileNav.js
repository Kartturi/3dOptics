import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false)
  const [showIcon, setShowIcon] = useState(false)

  const toggleNav = e => {
    setShowNav(!showNav)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  const handleScroll = e => {
    if (window.scrollY < 150) {
      setShowIcon(false)
      setShowNav(false)
    }

    if (window.scrollY > 150) {
      setShowIcon(true)
    }
  }

  return (
    <div className={`mobile-nav`}>
      <div
        className={`second-nav ${showNav ? "second-nav__change" : ""}`}
        onClick={toggleNav}
      >
        <div className="second-nav__bar1"></div>
        <div className="second-nav__bar2"></div>
        <div className="second-nav__bar3"></div>
      </div>

      <div
        className={`second-nav__content ${
          showNav ? "second-nav__content_visible" : ""
        }`}
      >
        <div className="second-nav__content_links">
          <Link to="#header" className="second-nav__content_link">
            Etusivut
          </Link>
          <Link to="#service2" className="second-nav__content_link">
            Palvelut
          </Link>
          <Link to="#company" className="second-nav__content_link">
            Yritys
          </Link>
          <Link to="#gallery" className="second-nav__content_link">
            Referenssit
          </Link>
          <Link to="#contact" className="second-nav__content_link">
            Yhteystiedot
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
