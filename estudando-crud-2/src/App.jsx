import { useState } from 'react'
import CardProdutos from './Components/CardProdutos'

function App() {

  const [produtos, setProdutos] = useState([
    {id: 1, nome: "Minecraft", preco: 80},
    {id: 2, nome: "Hytale", preco: 60},
    {id: 3, nome: "Heartopia", preco: 10}
  ])

  const [nomeInput, setNomeInput] = useState("")
  const [precoInput, setPrecoInput] = useState("")


  //logica da remoçao
  function removerJogo(id){
    const novaLista = produtos.filter((item) => item.id !== id)

    setProdutos(novaLista)
  }

  //logica da criaçao
function adicionarJogo(){
  if(nomeInput === "" || precoInput === ""){
    alert("Preencha os campos")
    return
  }

  const novoJogo = {
    id: Date.now(),
    nome: nomeInput,
    preco: Number(precoInput)
  }
  setProdutos([...produtos, novoJogo])

  setNomeInput("")
  setPrecoInput("")
}


  return (
    <div>
      <div>
        <h3>Adicionar jogo:</h3>
        <input type="text" placeholder='Nome do jogo' value={nomeInput}  onChange={(e) => setNomeInput(e.target.value)} />
        <input type="number" placeholder='Adicione um preço' value={precoInput} onChange={(e) => setPrecoInput(e.target.value)} />
        <button onClick={adicionarJogo}>Adicionar</button>
      </div>
      <h1>crud</h1>

      {produtos.map((item) => (
        <CardProdutos key={item.id} nome={item.nome} preco={item.preco} aoRemover={() => removerJogo(item.id)}/>
      ))}
    </div>
  )
}

export default App
