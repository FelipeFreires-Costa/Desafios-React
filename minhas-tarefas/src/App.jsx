import { useState, useEffect } from 'react'
import Tarefa from "./components/Tarefa"

import './App.css'


function App() {
  const [controlledInput, setControlledInput] = useState("")
  const [listaTarefas, setListaTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas")
    //se tiver algo, transforma de volta em array(JSON.parse). Se nao, retorna array vazio
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : []
  })

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(listaTarefas))
  }, [listaTarefas])

  function criarTarefa(){
    if(controlledInput === ""){
      alert("Campo vazio")
      return
    }

    const novaTarefa = {
      id: Date.now(),
      texto: controlledInput,
      concluido: false
    }

    //chamar um array dentro de chaves [] 
    setListaTarefas([...listaTarefas, novaTarefa])

    setControlledInput("")

  }

  function finalizarTarefa(id){
    const listaAtualizada = listaTarefas.map((tarefa) => {
      if(tarefa.id === id){
        return {...tarefa, concluido: !tarefa.concluido}
      }
      return tarefa
    })
    setListaTarefas(listaAtualizada)
  }

  function removerTarefa(id){
    setListaTarefas(listaTarefas.filter((tarefa) => tarefa.id !== id))
  }

    console.log(listaTarefas)
  return(
    <div>
      <h1>Minhas Tarefas</h1>
      <input type="text"
      value={controlledInput}
      onChange={(e) => setControlledInput(e.target.value)}
      />
      <p>preview: {controlledInput}</p>
      <button onClick={criarTarefa}>Adicionar</button>
      {
        listaTarefas.map((item) => (
          <Tarefa key={item.id}  texto={item.texto} concluido={item.concluido} aoClicar={() => finalizarTarefa(item.id)} aoRemover={() => removerTarefa(item.id)}/>
        ))
      }
    </div>
  )
}

export default App
