import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Project1 = props => {
  const projectInfo = {
    id: 2,
    desc: "2.Yrityskokoustilat vuokralle",
    url:
      "https://vt.plushglobalmedia.com/tour/TT167OBLNC/embed?fbclid=IwAR0g0LW_33FJFdpYTs2Lu4ldWZEAlp4KQAi2TXwLTl6BIPsDcmxnl6IIS5w",
    title: "Näytä asiakkaillesi hienot tilasi ennen vierailua",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio repellendus quam non excepturi fuga, neque dignissimos! Reiciendis harum similique voluptates, deleniti laudantium sit voluptatum! Unde dolores est nam cumque.",
  }

  return (
    <div className="project">
      <div className="project__frame_container">
        <iframe
          className="project-frame"
          src={
            "https://vt.plushglobalmedia.com/tour/TT167OBLNC/embed?fbclid=IwAR0g0LW_33FJFdpYTs2Lu4ldWZEAlp4KQAi2TXwLTl6BIPsDcmxnl6IIS5w"
          }
          frameBorder="0"
          style={{
            height: "100%",
            width: "100%",
            border: "none",
            borderRadius: "5px",
          }}
        ></iframe>
      </div>
      <div className="project__desc_container">
        <div className="project__desc">
          <h2>Konfrenssikeskus sörkkä</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            reiciendis quod quas, libero ipsam vitae consectetur explicabo
            fugiat est sed velit qui ipsa animi similique debitis error!
            Adipisci, fugiat unde!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            reiciendis quod quas, libero ipsam vitae consectetur explicabo
            fugiat est sed velit qui ipsa animi similique debitis error!
            Adipisci, fugiat unde!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            reiciendis quod quas, libero ipsam vitae consectetur explicabo
            fugiat est sed velit qui ipsa animi similique debitis error!
            Adipisci, fugiat unde!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project1
