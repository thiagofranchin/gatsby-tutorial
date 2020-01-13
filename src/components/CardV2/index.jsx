import React from 'react'
// import { Dropdown } from 'react-bootstrap'

const CardV2 = (props) => {
  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text text-gatsby">{props.textCard}</p>
        <a href="./" className={`btn btn-${props.colorButton}`}>Visitar</a>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardV2