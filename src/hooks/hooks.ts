import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { ICarrinhoItem, IItem } from '../types/types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface ICarrinhoDetalhes extends IItem {
  quantidade: number;
}

export default function useCarrinhoDetalhes() {
  const { carrinho, total } = useSelector((state: RootState) => {
    let total = 0;
    const regexp = new RegExp(state.busca, 'i');

    // Use a Map to store items by id for quick lookup
    const itemMap = new Map<string, IItem>();
    state.itens.forEach(item => itemMap.set(item.id, item));

    const carrinhoReduce = state.carrinho.reduce((itens: ICarrinhoDetalhes[], itemNoCarrinho: ICarrinhoItem) => {
      const item = itemMap.get(itemNoCarrinho.id);
      if (item) {
        total += item.preco * itemNoCarrinho.quantidade;
        if (item.titulo.match(regexp)) {
          itens.push({
            ...item,
            quantidade: itemNoCarrinho.quantidade,
          });
        }
      }
      return itens;
    }, []);

    return {
      carrinho: carrinhoReduce,
      total,
    };
  });

  return { carrinho, total };
}