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
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/" activeStyle={{ color: "#9963BA" }} className="nav-link" activeClassName="active">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Menu