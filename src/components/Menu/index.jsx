import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const Menu = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <Img fixed={logo.childImageSharp.fixed} alt="Logo"/>
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about/" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery/" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact/" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu