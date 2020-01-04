import React from 'react'
import { Link } from 'gatsby'

const About = () => {
  const text = 'meu texto'

  return(
    <>
      <nav>
        <Link to="/about" activeStyle={{ color: "red" }} activeClassName="active">About</Link> |
        <Link to="/contact" activeStyle={{ color: "red" }} activeClassName="active">Contact</Link>
      </nav>

      <h1>About</h1>
      <h2>{ text }</h2>
    </>
  )
}

export default About