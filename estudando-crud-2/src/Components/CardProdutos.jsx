import React from 'react'

function CardProdutos({nome, preco, aoRemover, aoEditar}){
  return (
    <div>
      <p>{nome} - R$ {preco}</p>
      <button onClick={aoRemover}>Remover</button>
      <button onClick={aoEditar}>Editar</button>
    </div>
  )
}

export default CardProdutos