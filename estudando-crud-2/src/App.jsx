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
  const [idEditando, setIdEditando] = useState(null)

  //chamar todas as infos para a ediçao - serve para preencher os campos com os dados antigos
  function chamarInfo(produto){
    setIdEditando(produto.id)
    setNomeInput(produto.nome)
    setPrecoInput(produto.preco)
  }

  //logica da remoçao
  function removerJogo(id){
    const novaLista = produtos.filter((item) => item.id !== id)

    setProdutos(novaLista)
  }

  //logica da criaçao e ediçao
function salvarItem(){
  if(nomeInput === "" || precoInput === ""){
    alert("Preencha os campos")
    return
  }

  //logica da ediçao
  //se o valor for diferente de null(ou seja, se contiver um id)
  if(idEditando !== null){
    //listaAtualizada vai receber o array produtos, se para cada produto o item.id for igual a idEditando
    const listaAtualizada = produtos.map((item) => {
      if(item.id === idEditando){
        //vai retornar as propriedade do item (id, preco e nome), logo em seguida, ele sobrescreve a propriedade nome e preco com o valor atual do estado do input.
        //resultado: o objeto retornado é uma copia modificada, preservando o ID original mas atualizando os dados
        return{...item, nome: nomeInput, preco: Number(precoInput)}
      }else{
        //se nao, recebe o item original. Mantemos a mesma referência de memória para esse objeto específico. Isso é eficiente para a performance.
        return item
      }
    })
    //setprodutos recebe o novo array(listaAtualizada)
    setProdutos(listaAtualizada)
    //volta para o estado null
    setIdEditando(null)

    //se nao, cria um novo item do 0
  }else{
    const novoJogo = {
    id: Date.now(),
    nome: nomeInput,
    preco: Number(precoInput)
    }
    setProdutos([...produtos, novoJogo])
  }
//limpar os inputs
  setNomeInput("")
  setPrecoInput("")
}


  return (
    <div>
      <div>
        <h3>Adicionar jogo:</h3>
        <input type="text" placeholder='Nome do jogo' value={nomeInput}  onChange={(e) => setNomeInput(e.target.value)} />
        <input type="number" placeholder='Adicione um preço' value={precoInput} onChange={(e) => setPrecoInput(e.target.value)} />
        <button onClick={salvarItem}>{idEditando === null ? "adicionar" : "Salvar alteração"}</button>
      </div>
      <h1>crud</h1>

      {produtos.map((item) => (
        <CardProdutos key={item.id} nome={item.nome} preco={item.preco} aoRemover={() => removerJogo(item.id)} aoEditar={() => chamarInfo(item)}/>
      ))}
    </div>
  )
}

export default App
