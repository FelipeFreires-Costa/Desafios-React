import React from 'react'
import "../App.css"

function CardServidor({nome, ip, status}){

  return (
    <div className={`card ${status}`}>
      <h2>{nome}</h2>
      <p>{ip}</p>
      <span>{status}</span>
    </div>
  )


}

export default CardServidor