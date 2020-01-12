import React from 'react'
import Menu from '../components/Menu'
import Layout from '../components/Layout'

import CardV2 from '../components/CardV2'

const About = () => {
  const text = 'meu texto'

  return(
    <Layout>
      <Menu />
      <h1>About</h1>
      <h2>{ text }</h2>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardV2
              titleCard="Card Title 01"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque tenetur vero quod autem, deleniti alias consequatur. Iure labore expedita, quia nulla quo minus ipsam velit quaerat quod in ipsum?"
              colorButton="gatsby"
            />
          </div>
          <div className="col-4">
            <CardV2
              titleCard="Card Title 02"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque tenetur vero quod autem, deleniti alias consequatur. Iure labore expedita, quia nulla quo minus ipsam velit quaerat quod in ipsum?"
              colorButton="warning"
            />
          </div>
          <div className="col-4">
            <CardV2
              titleCard="Card Title 03"
              textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque tenetur vero quod autem, deleniti alias consequatur. Iure labore expedita, quia nulla quo minus ipsam velit quaerat quod in ipsum?"
              colorButton="danger"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About