import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto' // Importa a função que formata o valor em Real (R$)

import { RootReducer } from '../../store' // Importa o tipo do estado global tipado (usado com useSelector)

// Componente de cabeçalho
const Header = () => {
  // Acessa os itens do carrinho do estado global
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  // Acessa os itens favoritos do estado global
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  // Calcula o valor total dos produtos no carrinho
  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
