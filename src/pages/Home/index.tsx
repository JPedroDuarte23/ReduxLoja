import styles from './Home.module.scss'

import relogio from '../../assets/inicial.png'

import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';


export default function Home() {
  const navigate = useNavigate();

  // REDUX
  const categorias = useAppSelector((state) => state.categorias);

  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil'
        className={styles.header}
        imagem={relogio}
      />
      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>
            Categorias
          </h1>
        </div>      
        <div className={styles['categorias-container']}>
          {categorias.map((categoria, index) => (
            <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
              <img src={categoria.thumbnail} alt={categoria.nome} />
              <h1>{categoria.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}