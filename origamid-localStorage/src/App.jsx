import { useEffect, useState } from 'react'
import Produtos from './Components/Produtos'


function App() {

const [produto, setProduto] = useState(null)

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null){
      setProduto(produtoLocal)
    } 
  }, [])

  useEffect(() => {
    if(produto !== null){
      window.localStorage.setItem('produto', produto)
    }
  }, [produto])


  function handleClick({target}){
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      <Produtos  produto={produto}/>
    </div>
  )
}

export default App
