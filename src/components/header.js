import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
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
        <Link to="#" className="header__nav_item">
          Palvelut
        </Link>
        <Link to="#" className="header__nav_item">
          Yritys
        </Link>
        <Link to="#" className="header__nav_item">
          Yhteystiedot
        </Link>
      </div>
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
