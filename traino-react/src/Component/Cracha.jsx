import { useState } from 'react'

//fazer desestruturaçao, usar menos props e usar mais as variaveis
const Cracha = ({nome, cargo, cor, idade, cidade, aoDeletar}) => {

  const [estaConectado, setEstaConectado] = useState(false)
  const [numeroLikes, setNumeroLikes] = useState(0)
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)


  function vermais(){
    setMostrarDetalhes(!mostrarDetalhes)
  }

  function contadorLike(){
    setNumeroLikes(numeroLikes + 1)
  }

  function handleConexao(){
    setEstaConectado(!estaConectado)
  }

  return (
    <div>
      <h2>{nome}</h2>
      <p>{cargo}</p>
      <button onClick={vermais}>{mostrarDetalhes ? "Ver menos" : "Ver mais"}</button>
      {mostrarDetalhes && (
        <div className="detalhes">
          <p>idade: {idade}</p>
          <p>Cidade: {cidade}</p>
        </div>
      )

      }
      <button onClick={contadorLike}>❤️ {numeroLikes}</button>
      <button onClick={handleConexao} style={{backgroundColor: cor}} >{estaConectado ? "Conectado" : "Conectar"}</button>
      <button onClick={aoDeletar} style={{backgroundColor: "red", color: "white"}}>Deletar</button>
    </div>
  )
}

export default Cracha