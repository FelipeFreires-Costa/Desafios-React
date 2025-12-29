import React from 'react'

function Tarefa({texto, concluido, aoClicar}) {
  return(
    <div>
      <li style={{textDecoration: concluido ? "line-through" : "none", color: concluido ? "gray" : "black"}} onClick={aoClicar}>
        {texto}
      </li>
    </div>
  )
}

export default Tarefa