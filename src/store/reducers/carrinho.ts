import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

// Define o tipo do estado do carrinho: uma lista de produtos
type CarrinhoState = {
  itens: Produto[] // O carrinho contém um array de produtos
}
// Estado inicial do carrinho (vazio no começo)
const initialState: CarrinhoState = {
  itens: []
}
// Cria o "slice" do Redux para o carrinho de compras
const carrinhoSlice = createSlice({
  name: 'carrinho', // Nome do slice (será usado na store)
  initialState, // Estado inicial definido acima
  reducers: {
    // Redutor que adiciona um produto ao carrinho
    adicionar: (state, action: PayloadAction<Produto>) => {
      const itemProduto = action.payload // Produto recebido pela ação

      // Verifica se o produto já está no carrinho pelo ID
      if (state.itens.find((produto) => produto.id === itemProduto.id)) {
        alert('Item já adicionado') // Se já existe, mostra alerta
      } else {
        state.itens.push(itemProduto) // Se não existe, adiciona ao array
      }
    }
  }
})

// Exporta a ação "adicionar" para ser usada nos componentes
export const { adicionar } = carrinhoSlice.actions
// Exporta o reducer do carrinho para ser usado na store do Redux
export default carrinhoSlice.reducer
