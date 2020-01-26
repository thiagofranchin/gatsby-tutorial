import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => {
  const {
    foto01,
    foto02,
    foto03
  } = useStaticQuery(graphql`
    query {
      foto01: file(relativePath: { eq: "foto-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto02: file(relativePath: { eq: "foto-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      foto03: file(relativePath: { eq: "foto-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return(
    <>
      {(() => {
        switch (props.name) {
          case 'foto01':
            return <Img fluid={foto01.childImageSharp.fluid} alt="foto01"/>
          case 'foto02':
            return <Img fluid={foto02.childImageSharp.fluid} alt="foto02"/>
          case 'foto03':
            return <Img fluid={foto03.childImageSharp.fluid} alt="foto03"/>
          default:
            return null;
        }
      })()}
    </>
  )
}

export default Image