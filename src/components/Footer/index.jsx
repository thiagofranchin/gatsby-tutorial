import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from './styled'

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        description,
        copyright,
      },
      socialMedia: {
        codepen,
        facebook,
        github,
      }
    }
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          copyright
        }
        socialMedia {
          codepen
          facebook
          github
        }
      }
    }
  `)
  return(
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4 mt-5">
          <div className="col-6 d-flex align-items-center">
            <a href={github} target="_blank">
              <Styled.GitHubIcon />
            </a>
            <a href={codepen} target="_blank">
              <Styled.CodepenIcon />
            </a>
            <a href={facebook} target="_blank">
              <Styled.FacebookIcon />
            </a>
          </div>
          <div className="col-6">
            {description}
          </div>
          <div className="col-12 d-flex justify-content-center mt-3">
            <small>{copyright}</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer