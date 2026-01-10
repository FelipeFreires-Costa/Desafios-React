import { useState } from 'react'
import Formulario from './components/Formulario'
import "../src/App.css"

function App() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  })

  const [IsEnviando, setIsEnviando] = useState(false)

  function handleSubmit(event){
    event.preventDefault()
      setIsEnviando(prevIsEnviando => !prevIsEnviando)
    setTimeout(() => {
      setIsEnviando(false)
      setForm({nome: "",
        email: "",
        senha: "",
        confirmarSenha: ""})
      alert("enviado com sucesso")
    }, 2000)
  }

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
      <form onSubmit={handleSubmit}>
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

        {
          !emailIsValid && form.email.length > 0 && (
            <span className='erro'>
              seu e-mail precisa incluir "@" e "."
            </span>
          )
        }

        <Formulario
        label="Senha: "
        name="senha"
        type="password"
        value={form.senha}
        aoMudar={handleChange}
        />

        {
          !senhaIsValid && form.senha.length > 0 && (
            <span className='erro'>
            Sua senha precisa conter pelomenos 8 caracteres
            </span>
          )
        }

        <Formulario
        label="Confirmar senha: "
        name="confirmarSenha"
        type="password"
        value={form.confirmarSenha}
        aoMudar={handleChange}
        />
        {
          !confirmarSenhaIsValid && form.confirmarSenha.length > 0 &&(
            <span className='erro'>
              As senhas nao conferem 
            </span>
          )
        }
        <button disabled={!formIsValid || IsEnviando}>{IsEnviando ? "Enviando..." : 'Enviar'}</button>
      </form>
    </div>
  )
}

export default App
