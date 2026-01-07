import { useState } from 'react'
import './App.css'
import CardProdutos from './components/CardProdutos';
import Carrinho from './components/Carrinho';

function App() {

  const [produtosIniciais, setProdutosIniciais] = useState([
  { id: 1, nome: "Tênis Nike Air", preco: 500, imagem: "👟", estoque: 5 },
  { id: 2, nome: "Tênis Adidas Run", preco: 300, imagem: "🏃‍♂️", estoque: 2 },
  { id: 3, nome: "Tênis Puma Casual", preco: 200, imagem: "👞", estoque: 3 },
]);

  const [carrinho, setCarrinho] = useState([])

  function adicionarAoCarrinho(produtoOriginal){
    const itemExistente = carrinho.find((item) => item.id === produtoOriginal.id)

    if(itemExistente){

      if(itemExistente && itemExistente.quantidade >= produtoOriginal.estoque){
        alert("estoque esgotou")
        return
      }

      const novaLista = carrinho.map((item) => {
        if(item.id === produtoOriginal.id){
          return { ...item, quantidade: item.quantidade + 1}
        }

        return item
      })



      setCarrinho(novaLista)

    } else {
      //cenario B: o produto nao existe

      const novoItem = {
        ...produtoOriginal,
        quantidade: 1
      }
      setCarrinho([...carrinho, novoItem])
    }
  }

  function removerDoCarrinho(id){
    const novaLista = (carrinho.filter((produto) => produto.id !== id))

    setCarrinho(novaLista)
  }
  

  const precoTotal = carrinho.reduce((acc, produto) => {
    return acc + produto.preco * produto.quantidade
  }, 0)


  return (
    <div>
      {
        produtosIniciais.map((produto) => {
          const itemNoCarrinho = carrinho.find(item => item.id === produto.id)

          const estoqueAcabou = itemNoCarrinho && itemNoCarrinho.quantidade >= produto.estoque

          return (
            <CardProdutos key={produto.id} desabilitado={estoqueAcabou} nome={produto.nome} preco={produto.preco} imagem={produto.imagem} estoque={produto.estoque} aoClicar={() => adicionarAoCarrinho(produto)}/>
          )
        })
      }
      <h2>Carrinho:</h2>
      {
        carrinho.map((item) => (
          <Carrinho key={item.id} nome={item.nome} preco={item.preco} imagem={item.imagem} quantidade={item.quantidade} aoDeletar={() => removerDoCarrinho(item.id)}/>
        ))
      }
      <p>total: R$ {precoTotal}</p>
    </div>
  )
}

export default App
