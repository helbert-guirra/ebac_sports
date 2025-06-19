import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritos'
import api from '../services/api'

// Cria a store do Redux
export const store = configureStore({
  reducer: {
    // Define os estados da store (chave e reducer correspondente)
    carrinho: carrinhoReducer, // gerencia os itens do carrinho
    favoritos: favoritosReducer, // gerencia os produtos favoritos
    [api.reducerPath]: api.reducer // usa como chave o caminho padrão da API
  },
  middleware: (getDefaultMiddleware) =>
    // Adiciona os middlewares padrão + o middleware da API (para lidar com requisições)
    getDefaultMiddleware().concat(api.middleware)
})

// Define o tipo RootReducer como sendo o tipo de todo o estado global da aplicação
// Isso é útil para tipar o useSelector corretamente
export type RootReducer = ReturnType<typeof store.getState>
