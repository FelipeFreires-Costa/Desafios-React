import React from "react";

function CardProdutos({ nome, preco, aoRemover, aoEditar }) {
  return (
    <div>
      <span>
        <strong>{nome}</strong> - R$ {preco.toFixed(2)}
      </span>
      <button style={{ background: 'red', color: 'white', border: 'none', cursor: 'pointer' }} onClick={aoRemover}>Remover</button>
      <button style={{ background: 'blue', color: 'white', border: 'none', cursor: 'pointer', marginLeft: '10px' }} onClick={aoEditarw}>Editar</button>
    </div>
  );
}

export default CardProdutos;
