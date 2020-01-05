import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <nav>
    <Link to="/about" activeStyle={{ color: "red" }} activeClassName="active">About</Link> |
    <Link to="/contact" activeStyle={{ color: "red" }} activeClassName="active">Contact</Link>
  </nav>
)

export default Menu