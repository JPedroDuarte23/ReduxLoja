import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICarrinhoItem, PayloadCarrinhoQuantidade } from '../../types/types'

const initialState: ICarrinhoItem[] = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    mudarCarrinho: (state, action: PayloadAction<string>) => {
      const temItem = state.some(item => item.id === action.payload)
      if(!temItem) {
        return [
          ...state,
          {
            id: action.payload,
            quantidade: 1
          }
        ]
      } else {
        return state = state.filter(item => item.id !== action.payload)
      }
    },
    mudarQuantidade: (state, action: PayloadAction<PayloadCarrinhoQuantidade>) =>  {
      state.map(itemNoCarrinho => {
        if(itemNoCarrinho.id === action.payload.id){
          itemNoCarrinho.quantidade += action.payload.quantidade
        }
      })
    },
    resetarCarrinho: () => initialState
  }
})

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer