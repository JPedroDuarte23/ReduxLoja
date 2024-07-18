import { configureStore } from '@reduxjs/toolkit'
import categoriasReducer from './reducers/categorias'
import itensReducer from './reducers/itens'
import carrinhoReducer from './reducers/carrinho'
import buscaReducer from './reducers/busca'

const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    itens: itensReducer,
    carrinho: carrinhoReducer,
    busca: buscaReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;