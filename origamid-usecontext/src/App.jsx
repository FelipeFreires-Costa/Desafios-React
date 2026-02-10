import { GlobalContext } from "./Contexts/GlobalContext";
import Produto from "./Produto";
function App() {
  return (
    <GlobalContext>
      <div>
        <Produto />
      </div>
    </GlobalContext>
  );
}

export default App;
