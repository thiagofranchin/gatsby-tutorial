import React from 'react'

const CardV2 = (props) => {
  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text">{props.textCard}</p>
        <a href="./" className={`btn btn-${props.colorButton}`}>Visitar</a>
      </div>
    </div>
  )
}

export default CardV2