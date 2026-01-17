import React from 'react'

function CardProdutos({nome, preco}){
  return (
    <div>
      <p>produto: {nome}</p>
      <p>preço: R$ {preco}</p>
    </div>
  )
}

export default CardProdutos