import { useState } from 'react'
import './App.css'
import CardProdutos from './Components/CardProdutos'

function App() {

  const [produtos, setProdutos] = useState([
    {id: 1, nome: "notebook", preco: 2500},
    {id: 2, nome: "Mouse", preco: 90}
  ])

  const [addProduto, setAddProduto] = useState({
    id:"",
    nome: "",
    preco: "",
  })

  const novoProduto = {id: Date.now(), nome: inputNome, preco: inputPreco}

  setProdutos([...produtos, novoProduto])

  return (
    <div>
      <h1>CRUD</h1>
      {produtos.map((item) => (
        <CardProdutos key={item.id} nome={item.nome} preco={item.preco}/>
      ))
      }
    </div>
  )
}

export default App
