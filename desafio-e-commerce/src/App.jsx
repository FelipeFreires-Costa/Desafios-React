import { useState } from 'react'
import './App.css'
import CardProdutos from './components/CardProdutos';
import Carrinho from './components/Carrinho';

function App() {

  const [produtosIniciais, setProdutosIniciais] = useState([
  { id: 1, nome: "Tênis Nike Air", preco: 500, imagem: "👟" },
  { id: 2, nome: "Tênis Adidas Run", preco: 300, imagem: "🏃‍♂️" },
  { id: 3, nome: "Tênis Puma Casual", preco: 200, imagem: "👞" },
]);

  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(produto){
    const novoProduto ={
      id: Math.random(),
      nome: produto.nome,
      preco: produto.preco,
      imagem: produto.imagem
    }

    setCarrinho([...carrinho, novoProduto])
  }

  function removerDoCarrinho(id){
    const novaLista = (carrinho.filter((produto) => produto.id !== id))

    setCarrinho(novaLista)
  }
  

  const precoTotal = carrinho.reduce((acc, produto) => {
    return acc + produto.preco
  }, 0)


  return (
    <div>
      {
        produtosIniciais.map((item) => (
          <CardProdutos key={item.id} nome={item.nome} preco={item.preco} imagem={item.imagem} aoClicar={() => adicionarAoCarrinho(item)}/>
        ))
      }
      <h2>Carrinho:</h2>
      {
        carrinho.map((item) => (
          <Carrinho key={item.id} nome={item.nome} preco={item.preco} imagem={item.imagem} aoDeletar={() => removerDoCarrinho(item.id)}/>
        ))
      }
      <p>total: R$ {precoTotal}</p>
    </div>
  )
}

export default App
