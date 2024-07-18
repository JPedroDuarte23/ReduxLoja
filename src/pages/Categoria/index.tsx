import styles from './Categoria.module.scss' 

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks'

import Header from '../../components/Header'
import NotFound from '../NotFound';
import Item from '../../components/Item';



export default function Categoria() {

  //PARAMS
  const { nomeCategoria } = useParams();

  //REGEXP
  
  //REDUX 
  const { categoria, itens } = useAppSelector(state => {
    const regexp = new RegExp(state.busca, 'i')
    return {
      categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
      itens: state.itens.filter(item => item.categoria === nomeCategoria && item.titulo.match(regexp))
    }
  }
  );

  if(!categoria) {
    return (
      <NotFound />
    )
  }


  return (
    <div>
      <Header 
        titulo={categoria.nome} 
        descricao={categoria.descricao} 
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map(item => (
          <Item key={item.id} {...item} quantidade={0} />
        ))}
      </div>
    </div>
  )
}