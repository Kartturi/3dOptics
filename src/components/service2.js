import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ServiceRight from "./serviceRight"

const Services2 = () => {
  const [showCurrent, setShowCurrent] = useState("1")
  const handleClick = e => {
    e.stopPropagation()
    console.log(e.target.dataset.current)
  }

  return (
    <div id="service2" className="service2">
      <div className="service__container_left">
        <h3 className="service2__title">Kuka tarvitsee virtuaalikierroksia?</h3>
        <div className="service2__left">
          <div
            className={`service2__left_item ${
              showCurrent === "1" ? "service2__left_item_active" : ""
            } `}
            data-current="1"
            onClick={() => {
              setShowCurrent("1")
            }}
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="home"
              style={{ color: "purple" }}
            />
            <h4 className="service2__left_item_title">Kiinteistönvälittäjät</h4>
          </div>
          <div
            onClick={() => {
              setShowCurrent("2")
            }}
            className={`service2__left_item ${
              showCurrent === "2" ? "service2__left_item_active" : ""
            } `}
            data-current="2"
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="coffee"
              style={{ color: "purple", marginTop: "15px" }}
            />
            <h4 className="service2__left_item_title">Ravintolat</h4>
          </div>
          <div
            onClick={() => {
              setShowCurrent("3")
            }}
            className={`service2__left_item ${
              showCurrent === "3" ? "service2__left_item_active" : ""
            } `}
            data-current="3"
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="hotel"
              style={{ color: "purple", marginTop: "15px" }}
            />
            <h4 className="service2__left_item_title">Hotellit</h4>
          </div>
          <div
            onClick={() => {
              setShowCurrent("4")
            }}
            className={`service2__left_item ${
              showCurrent === "4" ? "service2__left_item_active" : ""
            } `}
            data-current="4"
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="school"
              style={{ color: "purple", marginTop: "15px" }}
            />
            <h4 className="service2__left_item_title">Julkiset tilat</h4>
          </div>
          <div
            onClick={() => {
              setShowCurrent("5")
            }}
            className={`service2__left_item ${
              showCurrent === "5" ? "service2__left_item_active" : ""
            } `}
            data-current="5"
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="car"
              style={{ color: "purple", marginTop: "15px" }}
            />
            <h4 className="service2__left_item_title">Autokauppa</h4>
          </div>
          <div
            onClick={() => {
              setShowCurrent("6")
            }}
            className={`service2__left_item ${
              showCurrent === "6" ? "service2__left_item_active" : ""
            } `}
            data-current="6"
          >
            <FontAwesomeIcon
              className="service2__icons"
              icon="user"
              style={{ color: "purple", marginTop: "15px" }}
            />
            <h4 className="service2__left_item_title">Muut</h4>
          </div>
        </div>
      </div>
      <div className="service2__right">
        <ServiceRight current={showCurrent}></ServiceRight>
      </div>
    </div>
  )
}

export default Services2
