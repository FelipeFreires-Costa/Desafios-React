import React from 'react'

//fazer desestruturaçao, usar menos props e usar mais as variaveis
const Cracha = ({nome, cargo, cor}) => {
  function handleConexao(){
    alert(`Solicitação enviada para o ${nome}`)
  }

  return (
    <div>
      <h2>{nome}</h2>
      <p>{cargo}</p>
      <button onClick={handleConexao} style={{backgroundColor: cor}} >Conectar</button>
    </div>
  )
}

export default Cracha