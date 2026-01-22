import { useEffect, useState } from "react";
import "./App.css";
import CardProdutos from "./Components/CardProdutos";

function App() {
  const [produtos, setProdutos] = useState(() => {
    //tenta buscar no navegador
    const dadosSalvos = localStorage.getItem("meu-estoque")

    if(dadosSalvos){
      return JSON.parse(dadosSalvos)
    }else{
      return [
    { id: 1, nome: "notebook", preco: 2500 },
    { id: 2, nome: "Mouse", preco: 90 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Mouse pad", preco: 50 },
      ]
    }
  });

  const [nomeInput, setNomeInput] = useState("");
  const [precoInput, setPrecoInput] = useState("");
  const [idEditando, setIdEditando] = useState(null);

  //salvar dados no localStorage
  useEffect(() => {
    localStorage.setItem("meu-estoque", JSON.stringify(produtos))
  }, [produtos])

  function prepararEdicao(produto) {
    setIdEditando(produto.id);
    setNomeInput(produto.nome);
    setPrecoInput(produto.preco);
  }

  function salvarProduto() {
    //validaçao basica (nao deixa salvar vazio)
    if (nomeInput === "" || precoInput === "") {
      alert("Preencha todos os campos!");
      return;
    }

    //logica EDICAO
    if (idEditando !== null) {
      const listaAtualizada = produtos.map((item) => {
        if (item.id === idEditando) {
          return { ...item, nome: nomeInput, preco: Number(precoInput) };
        } else {
          return item;
        }
      });
      setProdutos(listaAtualizada);
      setIdEditando(null); //sair do modo ediçao
    } else {
      //criar novo objeto
      const novoProduto = {
        id: Date.now(),
        nome: nomeInput,
        preco: Number(precoInput), //garante que o preco seja numero
      };
      setProdutos([...produtos, novoProduto]);
    }
    //limpar os inputs
    setNomeInput("");
    setPrecoInput("");
  }

  function removerProduto(id) {
    const novalista = produtos.filter((item) => item.id !== id);

    setProdutos(novalista);
  }

  useEffect(() => {
    console.log("a lista de produtos mudou ", produtos);

  }, [produtos])

  return (
    <div>
      <h1>Controle de estoque</h1>

      <div
        className="formulario"
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px dashed #aaa",
        }}
      >
        <h3>Cadastrar Novo produto</h3>

        <input
          onChange={(e) => setNomeInput(e.target.value)}
          value={nomeInput}
          id=""
          placeholder="nome do produto"
        />
        <input
          type="number"
          onChange={(e) => setPrecoInput(e.target.value)}
          value={precoInput}
          placeholder="preço"
          style={{ marginLeft: "10px" }}
        />

        <button onClick={salvarProduto}>
          {idEditando === null ? "Adicionar" : "Salvar alteração"}
        </button>

      </div>
      {produtos.map((item) => (
        <CardProdutos
          key={item.id}
          nome={item.nome}
          preco={item.preco}
          aoRemover={() => removerProduto(item.id)}
          aoEditar={() => prepararEdicao(item)}
        />
      ))}

      {produtos.length === 0 && <p>Nenhum produto no estoque.</p>}
    </div>
  );
}

export default App;
