import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  fab,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__item footer__text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in
          voluptates at esse id, a nam neque adipisci nostrum labore sapiente,
          optio, illo tenetur voluptate. Sequi illo consectetur veniam nam!
        </p>
      </div>
      <div className="footer__item footer__copyright">
        <p>2019 &#9400; 3D-OPTICS</p>
      </div>
      <div className="footer__item footer__social">
        <FontAwesomeIcon
          className="footer__social_icon"
          icon={faInstagram}
          style={{ color: "#000000", marginTop: "15px", cursor: "pointer" }}
          size={"2x"}
        />
        <FontAwesomeIcon
          className="footer__social_icon"
          icon={faFacebook}
          style={{
            color: "#000000",
            marginTop: "15px",
            marginLeft: "15px",
            cursor: "pointer",
          }}
          size={"2x"}
        />
      </div>
    </div>
  )
}

export default Footer
