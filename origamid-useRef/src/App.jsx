import { useState, useRef } from "react"

function App() {

const [carrinho, setCarrinho] = useState(0)
const [notificacao, setNotificacao] = useState(null)
const timeoutRef = useRef()

function handleClick(){
  setCarrinho(carrinho + 1)
  
  clearTimeout(timeoutRef.current)
  setNotificacao("item adicionado no carrinho")
  timeoutRef.current = setTimeout(() => {
    setNotificacao(null)
  }, 1000)
}

  return (
    <>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </>
  )
}

export default App
