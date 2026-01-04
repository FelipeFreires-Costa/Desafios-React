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

  return (
    <div>
      {
        produtosIniciais.map((item) => (
          <CardProdutos key={item.id} nome={item.nome} preco={item.preco} imagem={item.imagem} aoClicar={() => adicionarAoCarrinho(item)}/>
        ))
      }
      {
        carrinho.map((item) => (
          <Carrinho key={item.id} nome={item.nome} preco={item.preco} imagem={item.imagem}/>
        ))
      }
    </div>
  )
}

export default App
