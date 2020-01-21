import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to="/" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about/" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact/" activeStyle={{ color: "red" }} className="nav-link" activeClassName="active">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Menu