import React, { useState, useEffect } from 'react'

const App = () => {
  // 1 ESTADO PARA O DADO: Guarda o texto do fato (começa vazio)
  const [fato, setFato] = useState('...')

  // 2 ESTADO DE CONTROLE: mostra ao usuario se o dado esta sendo carregado
  const [isLoading, setIsLoading] = useState(true)

  // 3 ESTADO DE TRIGGER: um valor que mudaremos para forçar a busca de um novo FATO
  //vamo usar um contador que começa com 0
  const [triggerFetch, setTriggerFetch] = useState(0)

  const buscarNovoFato = async () => {
    //1. SINALIZAR INICIO DA BUSCA
    setIsLoading(true)
    setFato('Buscando novo fato')

    try {
      const response = await fetch('https://catfact.ninja/fact')
      const data = await response.json()

      //atualiza o estado com o dado
      setFato(data.fact)
    } catch (error) {
      setFato('Erro ao carregar o fato:(');
      console.error("erro na busca da API", error)
    } finally {
      //sinaliza fim da busca (independente do sucesso ou erro)
      setIsLoading(false)
    }
  }

  //o HOOK useEffect
  useEffect(() => {
    buscarNovoFato()

    //o array de dependencias é [triggerFetch]
    //isso segnifica: 'rode esta funçao na montagem e toda vez que o 'triggerFetch' mudar '

  }, [triggerFetch])

  const handleNovoFato = () =>{
    //apenas incrementamos o estado. o useEffect fara o resto
    //nao prefcisa chamar 'buscarNovoFato' aque p useEffect fara isso por nos
    setTriggerFetch(prev => prev + 1)
  }
  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h2>Seu visualizador de Fato Curiosos</h2>
      {/*condicioanal: se o isLoaging for TRUE mostra 'carregando...'. 
      se for FALSE, mostra o valor do estado fato*/}
      <div style={{ 
            border: '1px solid #ccc', 
            padding: '20px', 
            minHeight: '100px',
            marginTop: '20px',
            marginBottom: '30px'
        }}>
          {isLoading ? (
            <p>Carregando fato...</p>
          ) : (
            <p>"{fato}"</p>
          )}
      </div>

      {/*botao que chama a funçao para mudar o estado de trigger*/}
      <button
      onClick={handleNovoFato}
      // Desabilita o botão enquanto a busca estiver em andamento
      disabled={isLoading}
      style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        {isLoading ? 'Aguarde...' : 'Buscar Novo Fato!'}
      </button>
    </div>
  )
}

export default App