import React from "react"
import PropTypes from "prop-types"
import Menu from "../Menu"
import Footer from '../Footer'
import GlobalStyles from '../../styles/globalStyled'

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
