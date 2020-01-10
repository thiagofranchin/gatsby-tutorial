import React from 'react'

const CardV2 = (props) => {
  return(
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.titleCard}</h5>
        <p class="card-text">{props.textCard}</p>
        <a href="#" class={`btn btn-${props.colorButton}`}>Visitar</a>
      </div>
    </div>
  )
}

export default CardV2