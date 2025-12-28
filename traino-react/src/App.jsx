import  Cracha  from "./Component/Cracha"
import { useState, useEffect } from 'react'

function App() {

  const [nomeInput, setNomeInput] = useState("")
  const [cargoInput, setCargoInput] = useState("")
  const [idadeInput, setIdadeInput] = useState("")
  const [cidadeInput, setCidadeInput] = useState("")
  const [corInput, setCorInput] = useState("green")
  
  const [usuarios, setUsuarios] = useState([
    {id: 1, nome: "Felipe", cargo: "Desenvolvedor Front end", cor: "green", idade: "23", cidade: "Sereno"},
    {id: 2, nome: "Giselly", cargo: "Desing", cor: "pink", idade: "24", cidade: "Ocara"},
    {id: 3, nome: "Joao", cargo: "Desenvolvedor Back end", cor: "blue", idade: "30", cidade: "Fortaleza"}
  ])

  useEffect(() => {
    alert("Bem vindo ao sistema de cracha")
  }, [])

  useEffect(() => {
    document.title = `total: ${usuarios.length}`
  }, [usuarios])

  const formValido = nomeInput && cargoInput

  function deletarUsuario(id){
    //crie uma lista com usuario, removendo usuario com o ID selecionado
    setUsuarios(usuarios.filter(user => user.id !== id))
  }

  function handleCadastro(){

    if(nomeInput === "" || cargoInput === ""){
      alert("Preencha todos os campos!")
      return
    }
    const novoUsuario = {
      nome: nomeInput,
      cargo: cargoInput,
      cor: corInput,
      cidade: cidadeInput,
      idade: idadeInput,
      id: Date.now()
    }
    setUsuarios([ ...usuarios, novoUsuario])
    setNomeInput("")
    setCargoInput("")
    setIdadeInput("")
    setCidadeInput("")
  }
  return (
    <div>

      <div className="cadastro">
        <h2>Cadastro</h2>
        <input type="text"
        placeholder="Nome de usuario"
        value={nomeInput}
        onChange={(e) => setNomeInput(e.target.value)}
        />

        <input type="text"
          placeholder="Digite eu cargo"
          value={cargoInput}
          onChange={(e) => setCargoInput(e.target.value)}
        />
        <input type="color"
        value={corInput}
        onChange={(e) => setCorInput(e.target.value)}
        />

        <input type="number"
        placeholder="Sua idade(opcional)"
        value={idadeInput}
        onChange={(e) => setIdadeInput(e.target.value)}
        />
        <input type="text"
        placeholder="Sua cidade(opcional)"
        value={cidadeInput}
        onChange={(e) => setCidadeInput(e.target.value)}
        />
      <p>Preview: {nomeInput} - {cargoInput} - {idadeInput}</p>

      <button onClick={handleCadastro} disabled={!formValido}> Cadastrar</button>
      </div>

      <h1>Usuarios</h1>
      {usuarios.map((item) =>(
          <Cracha key={item.id} nome={item.nome} cargo={item.cargo} cor={item.cor} cidade={item.cidade} idade={item.idade} aoDeletar={() => deletarUsuario(item.id)}/>
      ) )}
    </div>
  )
}

export default App
