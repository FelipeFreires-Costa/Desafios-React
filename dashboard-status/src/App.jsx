import { useState } from 'react'
import CardServidor from './components/CardServidor';
import "./App.css"

function App() {
const [servidores, setServidores] = useState([
    { id: 1, nome: "Servidor AWS", ip: "192.168.1.1", status: "online" },
    { id: 2, nome: "Servidor Google", ip: "192.168.1.2", status: "offline" },
    { id: 3, nome: "Banco de Dados", ip: "192.168.1.5", status: "alerta" },
    { id: 4, nome: "Servidor de Email", ip: "192.168.1.9", status: "online" }
  ]);

  const [filtro, setFiltro] = useState("todos")

  let listaFiltrada = servidores.filter((servidor) => {
    if(filtro === "todos") return true
    return servidor.status === filtro
  })

  return (
  <div>
    <button onClick={() => setFiltro("todos")}>Todos</button>
    <button onClick={() => setFiltro("online")}>Online</button>
    <button onClick={() => setFiltro("offline")}>Offline</button>
    {
      listaFiltrada.map((item) =>(
        <CardServidor key={item.id} nome={item.nome} ip={item.ip}  status={item.status}/>
      ))
    }
  </div>
)
}
export default App
