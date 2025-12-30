import React from 'react'

function Tarefa({texto, concluido, aoClicar, aoRemover}) {
  return(
    <div>

      <li>
        <span onClick={aoClicar} style={{textDecoration: concluido ? "line-through" : "none", color: concluido ? "gray" : "black"}}>
        {texto}
        </span>
        <button onClick={aoRemover}>❌</button>
      </li>
    </div>
  )
}

export default Tarefa