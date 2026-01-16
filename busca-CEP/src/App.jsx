import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [cepInput, setCepInput] = useState("")
  const [endereco, setEndereco] = useState({
    cidade: "",
    regiao: "",
    estado: ""
  })


  async function bucarCep(){

    if(cepInput === ""){
      alert('Digite um CEP')
      return
    }

    try {
      // 2. O 'await' faz o código esperar o servidor responder
      const response = await fetch(`https://viacep.com.br/ws/${cepInput}/json/`)

      // 3. O servidor respondeu! Agora transformamos em objeto JS
      const data = await response.json()

      //da um console.log(data) aqui para ver o que chegou
      console.log(data)

      //se deu erro (cep nao existe), a API manda um erro: true
      if(data.erro){
        alert("CEP nao encontrado")
        return
      }
      //se funcionar, atualiza o estado do endereço
      setEndereco({
        estado: data.estado,
        regiao: data.regiao,
        cidade: data.localidade
      })
    } catch (error){
      alert("Erro ao buscar. verifique sua conexao ou o cep digitado")
    }

  }
  
  useEffect(() => {
    if (cepInput.length === 8){
      bucarCep()
    }

  }, [cepInput])

  return (
    <div>
      <h1>Busca CEP</h1>
      <input type="text"
      placeholder='CEP'
      value={cepInput}
      onChange={(e) => setCepInput(e.target.value)}
      />


      <ul>
        <li>Regiao: {endereco.regiao}</li>
        <li>Estado: {endereco.estado}</li>
        <li>Cidade: {endereco.cidade}</li>
      </ul>


      
    </div>
  )
}

export default App
