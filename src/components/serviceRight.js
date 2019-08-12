import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import ServiceRightText from "../components/serviceRightText"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ServiceRight = props => {
  const data = useStaticQuery(graphql`
    query {
      sr1: file(relativePath: { eq: "service3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sr2: file(relativePath: { eq: "service2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sr3: file(relativePath: { eq: "service1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sr4: file(relativePath: { eq: "service4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sr5: file(relativePath: { eq: "service5.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sr6: file(relativePath: { eq: "service6.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const imageQueries = {
    img1: data.sr1.childImageSharp.fluid,
    img2: data.sr2.childImageSharp.fluid,
    img3: data.sr3.childImageSharp.fluid,
    img4: data.sr4.childImageSharp.fluid,
    img5: data.sr5.childImageSharp.fluid,
    img6: data.sr6.childImageSharp.fluid,
  }
  console.log(props.current)
  return (
    <div className="service-right">
      <BackgroundImage
        Tag="div"
        className="service-right__img"
        fluid={imageQueries[`img${props.current}`]}
        backgroundColor={`#040e18`}
      ></BackgroundImage>

      <ServiceRightText current={props.current}></ServiceRightText>
    </div>
  )
}

export default ServiceRight
