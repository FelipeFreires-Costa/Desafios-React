import React, { useState } from 'react'

const App = () => {
  //'contador' é a variavel que guarda o valor (começa com 0)
  //'setContador' é a FUNÇAO que usamos para ATUALIZAR esse valor
  const [contador, setContador] = useState(0)

  const handleClick = () =>{
    //para alterar o valor, SEMPRE use a funçao setContador()
    //o react detecta essa chamada e  redesenha o componente com o novo valor
    setContador(contador + 1)
  }

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      {/*Exibe o valor da variavel contador*/}
      <h1>Contagem Atual: {contador}</h1>

      <botton
      onClick={handleClick}
      style={{padding: '10px 20px', fontSize: '18px', cursor: 'pointer', background: 'green'}}
      >CLick para dicionar +1</botton>
    </div>
  )
}

export default App