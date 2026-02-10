import useLocalstorage from "./Hooks/useLocalstorage"

function App() {
  const [produto, setProduto] = useLocalstorage('produto', '')

  function handleClick({target}){
    setProduto(target.innerText)
  }

  return (
    <>
    <h2>produto preferido {produto} </h2>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphonek</button>
    </>
  )
}

export default App
