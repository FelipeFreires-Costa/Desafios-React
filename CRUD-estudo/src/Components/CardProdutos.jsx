import React from "react";

function CardProdutos({ nome, preco, aoRemover }) {
  return (
    <div>
      <span>
        <strong>{nome}</strong> - R$ {preco.toFixed(2)}
      </span>
      <button style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }} onClick={aoRemover}>Remover</button>
    </div>
  );
}

export default CardProdutos;
