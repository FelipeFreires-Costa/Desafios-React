import React from 'react'

function CardProdutos({nome, preco, imagem, desabilitado, estoque, aoClicar}){

  return (
    <div>
      <h3>{nome}</h3>
      <span>{imagem}</span>
      <p>Preco: R$ {preco}</p>
      <p>Qtd: {estoque}</p>
      <button onClick={aoClicar} disabled={desabilitado}>Comprar</button>
      <p>=======================================</p>
    </div>


  )
}

export default CardProdutos