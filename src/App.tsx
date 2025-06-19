import Header from './components/Header'
import Produtos from './containers/Produtos'

import { Provider } from 'react-redux'
import { store } from './store'

import { GlobalStyle } from './styles'

// Define o tipo Produto (usado em outras partes do app, como no Redux e nos componentes)
export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}
// Componente principal da aplicação
function App() {
  return (
    <>
      {/* O Provider envolve toda a aplicação e fornece acesso à store Redux */}
      <Provider store={store}>
        <GlobalStyle /> {/* Aplica estilos globais em toda a aplicação */}
        <div className="container">
          {' '}
          {/* Renderiza o cabeçalho */}
          <Header />
          <Produtos />
        </div>
      </Provider>
    </>
  )
}

export default App
