import Header from '../../components/Header'
import Item from '../../components/Item';
import useCarrinhoDetalhes, { useAppDispatch } from '../../hooks/hooks';
import { resetarCarrinho } from '../../store/reducers/carrinho';
import styles from './Carrinho.module.scss'

export default function Carrinho() {

  const { carrinho, total } = useCarrinhoDetalhes();
  const dispatch = useAppDispatch();

  console.log(carrinho)

  return (
    <div>
      <Header titulo='Carrinho de Compras' descricao='Confira os produtos que você adicionou ao carrinho.' />
      <div className={styles.carrinho}>
        {carrinho.map(item => <Item key={item.id} {...item} carrinho/>)}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>Subtotal: <strong>R$ {total.toFixed(2)}</strong></span>
        </div>
        <button
          className={styles.finalizar}
          onClick={() => dispatch(resetarCarrinho())}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  )
}