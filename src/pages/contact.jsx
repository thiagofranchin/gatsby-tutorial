import React from 'react'
import Menu from '../components/Menu'

const Contact = () => {
  const text = 'meu texto contact'

  return(
    <>
      <Menu />

      <h1>Contact</h1>
      <h2>{ text }</h2>
    </>
  )
}

export default Contact