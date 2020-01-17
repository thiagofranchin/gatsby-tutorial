import React from 'react'
import * as Styled from './styled'

const CardV2 = (props) => {
  return(
    <Styled.CardV2Wrapper
      className="card"
      background={props.backgroundCard}
      primary={props.styleDefault}
    >
      <div className="card-body">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text">{props.textCard}</p>
        <a href="./" className={`btn btn-${props.colorButton}`}>Visitar</a>
      </div>
    </Styled.CardV2Wrapper>
  )
}

export default CardV2