import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Services2 = () => {
  return (
    <div className="service2">
      <div className="service__container_left">
        <h3 className="service2__title">Kenelle?</h3>
        <div className="service2__left">
          <div className="service2__left_item">
            <FontAwesomeIcon
              icon="home"
              size="4x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <h4>Kiinteistönvälittäjät</h4>
          </div>
          <div className="service2__left_item">
            <FontAwesomeIcon
              icon="coffee"
              size="4x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <h4>Ravintolat</h4>
          </div>
          <div className="service2__left_item">
            <FontAwesomeIcon
              icon="coffee"
              size="4x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <h4>Hotellit</h4>
          </div>
          <div className="service2__left_item">
            <FontAwesomeIcon
              icon="school"
              size="4x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <h4>Julkiset tilat</h4>
          </div>
          <div className="service2__left_item">
            <FontAwesomeIcon
              icon="car"
              size="4x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <h4>Autokauppa</h4>
          </div>
          <div className="service2__left_item">
            <FontAwesomeIcon
              icon="user"
              size="4x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <h4>Muut</h4>
          </div>
        </div>
      </div>
      <div className="service2__right">asd</div>
    </div>
  )
}

export default Services2
