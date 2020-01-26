import React from 'react'
import Layout from "../components/Layout"

import Images from '../components/Images'

const Gallery = () => {
  return(
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-gatsby mb-4">Gallery</h1>
          </div>
        </div>
        <div className="row">
          <Images name="gallery" />
        </div>
      </div>
    </Layout>
  )
}

export default Gallery