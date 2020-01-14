import React from 'react'
import Layout from '../components/Layout'
import CardV2 from '../components/CardV2'

const About = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur'

  return(
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>About</h1>
            <p>{ text }</p>
          </div>
        </div>
      </div>

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