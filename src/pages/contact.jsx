import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/seo"

import * as Styled from '../styles/pages/contactStyles'

const Contact = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur'

  return(
    <Layout>
      <SEO title="contact" />
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Contact</h1>
            <p>{ text }</p>
          </div>
          <div className="col-md-6 mb-5">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input name="name" type="text" className="form-control" id="exampleInputName" placeholder="Name" />
            </div>
            <div className="form-group">
              <input name="email" type="email" className="form-control" id="exampleInputEmail" placeholder="E-mail" />
            </div>
            <div className="form-group">
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Textarea"></textarea>
            </div>
            <button type="submit" className="btn btn-gatsby">Send</button>
          </form>
          </div>
          <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">
              <Styled.EmailWrapper danger
              /> my-email@email.com
            </li>
            <li className="list-group-item">
              <Styled.PhoneWrapper danger
              /> (00) 98765-1234
            </li>
            <li className="list-group-item">
              <Styled.LocationOnWrapper danger
              /> Street 27, 321
            </li>
          </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact