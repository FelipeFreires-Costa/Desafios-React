import Home from './Components/Home'
import Produtos from './Components/Produtos'
import Header from './Components/Header'

function App() {

  const { pathname } = window.location

  let Component
  if(pathname === '/produtos'){
    Component = Produtos
  }else{
    Component = Home
  }

  return (
    <div>
      <Header />
      <Component />
    </div>
  )
}

export default App
