import React from 'react'

const Carrinho = ({nome, preco, imagem}) => {
  return (
    <div>
      <p>{nome}</p>
      <p>{preco}</p>
      <p>{imagem}</p>
      </div> 

  )
}

export default Carrinho