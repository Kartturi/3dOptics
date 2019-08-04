import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Services = ({ logo }) => {
  return (
    <div className="services">
      <h2 className="services__title">
        Tuo lisäarvoa yrityksellesi immersiivisellä sisällöllä
      </h2>
      <div className="service__container">
        <div className="service__item">
          <h3 className="service__item_title">Kiinteistönvälittäjille</h3>
          <div className="service__item_lower-container">
            <FontAwesomeIcon
              icon="home"
              size="5x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <p className="service__item_para">
              Mahdollisuus tutustua asuntoihin virtuaalisesti nostaa tutkimusten
              mukaan oston mahdollisuuksia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Recusandae vero vel officia deserunt
              deleniti tempore nam magnam suscipit, iusto corporis expedita esse
              ratione reprehenderit, sequi laborum modi omnis quo sunt.
            </p>
          </div>
        </div>
        <div className="service__item">
          <h3 className="service__item_title">Ravintolat</h3>
          <div className="service__item_lower-container">
            <FontAwesomeIcon
              icon="coffee"
              size="5x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <p className="service__item_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae vero vel officia deserunt deleniti tempore nam magnam
              suscipit, iusto corporis expedita esse ratione reprehenderit,
              sequi laborum modi omnis quo sunt.
            </p>
          </div>
        </div>
        <div className="service__item">
          <h3 className="service__item_title">Julkiset tilat</h3>
          <div className="service__item_lower-container">
            <FontAwesomeIcon
              icon="hotel"
              size="5x"
              style={{ color: "#000000", marginTop: "15px" }}
            />
            <p className="service__item_para">
              Mahdollisuus tutustua asuntoihin virtuaalisesti nostaa tutkimusten
              mukaan oston mahdollisuuksia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Recusandae vero vel officia deserunt
              deleniti tempore nam magnam suscipit, iusto corporis expedita esse
              ratione reprehenderit, sequi laborum modi omnis quo sunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
