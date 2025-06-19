import * as S from './styles'
import { Produto } from '../../App'

import { adicionar as adicionarCarrinho } from '../../store/reducers/carrinho'
import { adicionar as adicionarFavoritos } from '../../store/reducers/favoritos'
import { useDispatch } from 'react-redux'

// Função auxiliar para formatar números como moeda brasileira (R$)
export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )
// Define o tipo das props que o componente recebe
type Props = {
  produto: Produto // O componente recebe um objeto do tipo Produto
}
// Componente funcional que exibe as informações de um produto
const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch() // Obtém a função dispatch para disparar ações Redux

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          dispatch(adicionarFavoritos(produto)) // Dispara a ação para o reducer de favoritos
        }}
        type="button"
      >
        Adicionar aos Favoritos
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarCarrinho(produto))} // Dispara a ação para o reducer de carrinho
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}
// Exporta o componente para ser usado em outras partes do app
export default ProdutoComponent
