import React from "react";
import { GlobalContext } from "./Contexts/GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  if (global.produto === null) return null;
  return (
    <div>
      Produto:{" "}
      {global.produto.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

export default Produto;
