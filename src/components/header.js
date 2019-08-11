import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobileNav from "./mobileNav"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div id="header" className="header">
      <div className="header__logo">
        <h1 className="Logo" style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <span
              style={{
                color: `#ff0000`,
                textDecoration: `none`,
              }}
            >
              3
            </span>
            <span
              style={{
                color: "#666666",
              }}
            >
              D-OPTICS
            </span>
          </Link>
        </h1>
      </div>
      <div className="header__nav">
        <Link to="#service2" className="header__nav_item">
          Palvelut
        </Link>
        <Link to="#company" className="header__nav_item">
          Yritys
        </Link>
        <Link to="#gallery" className="header__nav_item">
          Referenssit
        </Link>
        <Link to="#contact" className="header__nav_item">
          Yhteystiedot
        </Link>
      </div>
      <MobileNav></MobileNav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
