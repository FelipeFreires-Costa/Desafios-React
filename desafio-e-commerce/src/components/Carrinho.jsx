import React from 'react'

const Carrinho = ({nome, preco, imagem, aoDeletar}) => {
  return (
    <div>
      <p>{nome}</p>
      <p>R$ {preco}</p>
      <p>{imagem}</p>
      <button onClick={aoDeletar}>❌</button>
      </div> 

  )
}

export default Carrinho