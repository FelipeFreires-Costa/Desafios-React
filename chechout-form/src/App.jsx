import { useState } from 'react'
import Formulario from './components/Formulario'

function App() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  })

  function handleChange(event){
    const {name, value} = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const nomeIsValid = form.nome.length > 0

  const senhaIsValid = form.senha.length >= 8

  const emailIsValid = form.email.includes(".") && form.email.includes("@")

  const confirmarSenhaIsValid = form.confirmarSenha === form.senha

  const formIsValid = nomeIsValid && senhaIsValid && emailIsValid && confirmarSenhaIsValid

  return (

    <div>
      <h1>tela de login</h1>
      <form>
        <Formulario
        label="Nome Completo: "
        name="nome"
        value={form.nome}
        aoMudar={handleChange}
        />

        <Formulario
        label="E-mail: "
        name="email"
        type="email"
        value={form.email}
        aoMudar={handleChange}
        />
        <Formulario
        label="Senha: "
        name="senha"
        type="password"
        value={form.senha}
        aoMudar={handleChange}
        />

        <Formulario
        label="Confirmar senha: "
        name="confirmarSenha"
        type="password"
        value={form.confirmarSenha}
        aoMudar={handleChange}
        />
      </form>
      <button disabled={!formIsValid}>Enviar</button>
    </div>
  )
}

export default App
