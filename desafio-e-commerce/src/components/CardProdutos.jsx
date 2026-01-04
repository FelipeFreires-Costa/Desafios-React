import React from 'react'

function CardProdutos({nome, preco, imagem, aoClicar}){

  return (
    <div>
      <h3>{nome}</h3>
      <span>{imagem}</span>
      <p>{preco}</p>
      <button onClick={aoClicar}>Comprar</button>
    </div>


  )
}

export default CardProdutos