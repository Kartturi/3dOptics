import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Project1 from "../components/projects/project1"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Overlay = props => {
  useEffect(() => {
    window.document.body.style.overflow = "hidden"

    return () => {
      window.document.body.style.overflow = "visible"
    }
  })

  return (
    <div className="overlay">
      <div
        className="overlay__close"
        onClick={() => {
          props.display()
        }}
      >
        <FontAwesomeIcon
          icon="times-circle"
          size="3x"
          style={{ color: "red" }}
        />
      </div>
      <Project1></Project1>
    </div>
  )
}

export default Overlay
