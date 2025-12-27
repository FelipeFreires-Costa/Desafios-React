import { useState } from 'react'

//fazer desestruturaçao, usar menos props e usar mais as variaveis
const Cracha = ({nome, cargo, cor}) => {

  const [estaConectado, setEstaConectado] = useState(false)
  const [numeroLikes, setNumeroLikes] = useState(0)

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
      <button onClick={contadorLike}>❤️ {numeroLikes}</button>
      <button onClick={handleConexao} style={{backgroundColor: cor}} >{estaConectado ? "Conectado" : "Conectar"}</button>
    </div>
  )
}

export default Cracha