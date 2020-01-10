import React from 'react'

import cardStyles from './card.module.scss'

const Card = () => {
  return(
    <div className={cardStyles.card}>
      <h1>Title Card</h1>
      <h1 className={cardStyles.h1}>Title 2 Card</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quas praesentium iure nesciunt error hic cumque provident sequi soluta quaerat perspiciatis deleniti. Nemo dignissimos qui quasi soluta repellat eos eum!</p>
      <button>Button Card</button>
    </div>
  )
}

export default Card