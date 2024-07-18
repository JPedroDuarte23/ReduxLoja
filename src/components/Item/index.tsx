import styles from './Item.module.scss'
import { AiOutlineHeart, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import classNames from 'classnames'

import { IItem } from '../../types/types'
import { mudarFavorito } from '../../store/reducers/itens'
import { useDispatch } from 'react-redux'
import { mudarCarrinho, mudarQuantidade } from '../../store/reducers/carrinho'
import { useAppSelector } from '../../hooks/hooks'

const iconeProps = {
  size: 24,
  color: '#041833'
}

const quantidadeProps = {
  size: 32,
  color: '#1875E8'
}

interface ItemProps extends IItem {
  carrinho?: boolean,
  quantidade: number
}

export default function Item({ titulo, descricao, foto, preco, favorito, id, quantidade, carrinho = false }: ItemProps) {

  //REDUX)
  const dispatch = useDispatch();
  const isInCart = useAppSelector(state => state.carrinho.some(item => item.id === id))

  const handleFavorito = () => {
    dispatch(mudarFavorito(id))
  }

  const handleCarrinho = () => {
    dispatch(mudarCarrinho(id))
  }


  return (
    <div className={classNames(styles.item, {
      [styles.itemNoCarrinho]: carrinho,
    })}>
      <div className={styles['item-imagem']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            R$ {preco.toFixed(2)}
          </div>
          <div className={styles['item-acoes']}>
            {favorito
              ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={handleFavorito} />
              : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={handleFavorito} />
            }
            {carrinho
              ? (
                <div className={styles.quantidade}>
                  Quantidade:
                  <AiFillMinusCircle
                    {...quantidadeProps}
                    onClick={() => {
                      if(quantidade >= 1) {
                        dispatch(mudarQuantidade({ id, quantidade: -1 }));
                      }
                    }}
                  />
                  <span>{String(quantidade || 0).padStart(2, '0')}</span>
                  <AiFillPlusCircle
                    {...quantidadeProps}
                    onClick={() => dispatch(mudarQuantidade({ id, quantidade: +1 }))}
                  />
                </div>
              )
              : (<FaCartPlus
                {...iconeProps}
                color={isInCart ? '#1875E8' : iconeProps.color}
                className={styles['item-acao']}
                onClick={handleCarrinho}
              />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}