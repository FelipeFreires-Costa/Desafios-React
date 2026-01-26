import { useState } from 'react'
import Home from './Components/Home'
import Produtos from './Components/Produtos'
import Header from './Components/Header'
import ButtonModal from './Components/ButtonModal'
import Modal from './Components/Modal'

function App() {

  const { pathname } = window.location
  const [ativoHook, setTivoHook] = useState(false)

  const [modal, setModal] = useState(false)

  function handleClick(){
    setTivoHook(!ativoHook)
  }

  let Component
  if(pathname === '/produtos'){
    Component = Produtos
  }else{
    Component = Home
  }

  return (
    <div>
      <div>{modal ? 'modal aberto' : "modal fechado"}</div>
        <ButtonModal setModal={setModal}/>
        <Modal modal={modal} setModal={setModal} />
        
      <button onClick={handleClick} >{ativoHook ? "botao azul" : "botao vermelho"}</button>
      <Header />
      <Component />
    </div>
  )
}

export default App
