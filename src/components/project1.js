import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"

const Project1 = props => {
  const projectInfo = {
    project1: {
      id: 1,
      desc: "Yrityskokoustilat vuokralle",
      url:
        "https://vt.plushglobalmedia.com/tour/TT167OBLNC/embed?fbclid=IwAR0g0LW_33FJFdpYTs2Lu4ldWZEAlp4KQAi2TXwLTl6BIPsDcmxnl6IIS5w",
      title: "Näytä asiakkaillesi hienot tilasi ennen vierailua",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio repellendus quam non excepturi fuga, neque dignissimos! Reiciendis harum similique voluptates, deleniti laudantium sit voluptatum! Unde dolores est nam cumque.",
    },
    project2: {
      id: 2,
      desc: "Käytettyjen autojen siisteys tarkistus",
      url:
        "https://momento360.com/e/u/d392853d33474583913962a7f2a64d63?utm_campaign=embed&utm_source=other&utm_medium=other&heading=195.39413085440765&pitch=-3.2724836094640977&field-of-view=100",
      title: "Käytettyjen autojen siisteys tarkistus",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio repellendus quam non excepturi fuga, neque dignissimos! Reiciendis harum similique voluptates, deleniti laudantium sit voluptatum! Unde dolores est nam cumque.",
    },
  }
  console.log(props.current, "from project")
  let currentNum = props.current
  return (
    <div className="project">
      <div className="project__frame_container">
        <iframe
          className="project-frame"
          src={projectInfo["project" + currentNum].url}
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
          <h2>{projectInfo["project" + currentNum].title}</h2>
          <p>{projectInfo["project" + currentNum].text}</p>
        </div>
      </div>
    </div>
  )
}

export default Project1
