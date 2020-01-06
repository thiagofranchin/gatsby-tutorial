import React from 'react'
import Menu from '../components/Menu'
import Layout from '../components/Layout'

const About = () => {
  const text = 'meu texto'

  return(
    <Layout>
      <Menu />
      <h1>About</h1>
      <h2>{ text }</h2>
    </Layout>
  )
}

export default About