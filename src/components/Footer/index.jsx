import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from './styled'

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        socialMedia: {
          codepen,
          facebook,
          github,
        },
        copyright,
        description
      }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          socialMedia {
            codepen
            facebook
            github
          }
          copyright
          description
        }
      }
    }
  `)
  return(
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4 mt-5">
          <div className="col-md-6 mb-3">
            {description}
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Styled.GitHubIcon />
            </a>
            <a href={codepen} target="_blank" rel="noopener noreferrer">
              <Styled.CodepenIcon />
            </a>
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <Styled.FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row bg-gray-dark text-white py-3">
          <div className="col-12 d-flex justify-content-center">
            {copyright}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer