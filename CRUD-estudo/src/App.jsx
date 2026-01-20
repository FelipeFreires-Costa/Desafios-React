import { useState } from 'react'
import './App.css'
import CardProdutos from './Components/CardProdutos'

function App() {

  const [produtos, setProdutos] = useState([
    {id: 1, nome: "notebook", preco: 2500},
    {id: 2, nome: "Mouse", preco: 90},
    {id: 3, nome: "Teclado", preco: 200},
    {id: 4, nome: "Mouse pad", preco: 50}
  ])

  const [nomeInput, setNomeInput] = useState("")
  const [precoInput, setPrecoInput] = useState("")

  function adicionarProduto(){
    //validaçao basica (nao deixa salvar vazio)
    if(nomeInput === "" || precoInput === ""){
      alert("Preencha todos os campos!")
      return
    }

    //criar novo objeto
    const novoProduto = {
      id: Date.now(),
      nome: nomeInput,
      preco: Number(precoInput) //garante que o preco seja numero
    }

    setProdutos([...produtos, novoProduto])

    //limpar os inputs
    setNomeInput("")
    setPrecoInput("")
  } 

  function removerProduto(id){
    const  novalista = (produtos.filter((item) => item.id !== id))

    setProdutos(novalista)
  }

  console.log(produtos)

  return (
    <div>
      <h1>Controle de estoque</h1>

    <div className="formulario" style={{ marginBottom: '20px', padding: '10px', border: '1px dashed #aaa' }}>
        <h3>Cadastrar Novo produto</h3>

        <input onChange={(e) => setNomeInput(e.target.value)} value={nomeInput} id="" placeholder='nome do produto'/>
        <input type="number" onChange={(e) => setPrecoInput(e.target.value)} value={precoInput} placeholder='preço' style={{ marginLeft: '10px' }} />
        <button onClick={adicionarProduto}>+ adicionar</button>
    </div>

      {produtos.map((item) => (
        <CardProdutos key={item.id} nome={item.nome} preco={item.preco} aoRemover={() => removerProduto(item.id)}/>
      ))
      }

      {
        produtos.length === 0 && <p>Nenhum produto no estoque.</p>
      }
    </div>
  )
}

export default App
