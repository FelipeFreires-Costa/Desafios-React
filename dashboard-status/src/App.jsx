import { useState } from 'react'
import CardServidor from './components/CardServidor';
import "./App.css"

function App() {
const [servidores, setServidores] = useState([
    { id: 1, nome: "Servidor AWS", ip: "192.168.1.1", status: "online" },
    { id: 2, nome: "Servidor Google", ip: "192.168.1.2", status: "offline" },
    { id: 3, nome: "Banco de Dados", ip: "192.168.1.5", status: "online" },
    { id: 4, nome: "Servidor de Email", ip: "192.168.1.9", status: "online" }
  ]);

  const [filtro, setFiltro] = useState("todos")
  
  
    let listaFiltrada = servidores.filter((servidor) => {
    if(filtro === "todos") return true
    return servidor.status === filtro
  })
  
  let conteudoPrincipal;
  
  if(listaFiltrada.length === 0){
    conteudoPrincipal = <p>nenhum servidor encontrado</p>
  } else {
    conteudoPrincipal = listaFiltrada.map(item => <CardServidor key={item.id} {...item}/>)
  }

  return (
  <div>
    <button onClick={() => setFiltro("todos")}>Todos</button>
    <button onClick={() => setFiltro("alerta")}>Alerta</button>
    <button onClick={() => setFiltro("online")}>Online</button>
    <button onClick={() => setFiltro("offline")}>Offline</button>
    
    <div>
    {conteudoPrincipal}
    </div>
  </div>
)
}
export default App
