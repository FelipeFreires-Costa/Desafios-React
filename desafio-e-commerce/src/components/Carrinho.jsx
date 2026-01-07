import React from 'react'

const Carrinho = ({nome, preco, imagem, quantidade, aoDeletar}) => {
  return (
    <div>
      <p>{nome}</p>
      <p>R$ {preco}</p>
      <p>{imagem}</p>
      <p>Qtd: {quantidade}</p>
      <button onClick={aoDeletar} >❌</button>
      </div> 

  )
}

export default Carrinho