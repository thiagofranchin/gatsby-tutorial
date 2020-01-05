import React from 'react'
import Menu from '../components/Menu'

const About = () => {
  const text = 'meu texto'

  return(
    <>
      <Menu />
      <h1>About</h1>
      <h2>{ text }</h2>
    </>
  )
}

export default About