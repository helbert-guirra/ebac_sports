import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

// Componente funcional que exibe a lista de produtos
const ProdutosComponent = () => {
  // Usa o hook do RTK Query para buscar os produtos
  // "produtos" é o resultado da API
  // "isLoading" indica se os dados ainda estão sendo carregados
  const { data: produtos, isLoading } = useGetProdutosQuery()

  // Se os dados ainda estão sendo carregados, mostra uma mensagem
  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {/* Percorre a lista de produtos e renderiza um componente Produto para cada um */}
        {produtos?.map((produto) => (
          // Passa o objeto "produto" como prop para o componente Produto
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
