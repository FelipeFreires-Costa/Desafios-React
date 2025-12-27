import  Cracha  from "./Component/Cracha"
import { useState } from 'react'

function App() {

  const [nomeInput, setNomeInput] = useState("")
  const [cargoInput, setCargoInput] = useState("")
  const [corInput, setCorInput] = useState("green")
  
  const usuarios = [
    {id: 1, nome: "Felipe", cargo: "Desenvolvedor Front end", cor: "green", idade: "23", cidade: "Sereno"},
    {id: 2, nome: "Giselly", cargo: "Desing", cor: "pink", idade: "24", cidade: "Ocara"},
    {id: 3, nome: "Joao", cargo: "Desenvolvedor Back end", cor: "blue", idade: "30", cidade: "Fortaleza"}
  ]
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
      <p>Preview: {nomeInput} - {cargoInput}</p>
      </div>

      <h1>Usuarios</h1>
      {usuarios.map((item) =>(
          <Cracha key={item.id} nome={item.nome} cargo={item.cargo} cor={item.cor} cidade={item.cidade} idade={item.idade} />
      ) )}
    </div>
  )
}

export default App
