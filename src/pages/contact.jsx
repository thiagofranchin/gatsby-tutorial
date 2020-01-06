import React from 'react'
import Menu from '../components/Menu'
import Layout from '../components/Layout'

const Contact = () => {
  const text = 'meu texto contact'

  return(
    <Layout>
      <Menu />
      <h1>Contact</h1>
      <h2>{ text }</h2>
    </Layout>
  )
}

export default Contact