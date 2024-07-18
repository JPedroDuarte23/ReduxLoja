import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { mudarBusca, resetarBusca } from '../../store/reducers/busca';
import styles from './Busca.module.scss'
import { useLocation } from 'react-router-dom';


export default function Busca(){

  const busca = useAppSelector(state => state.busca)
  const dispatch = useAppDispatch();

  const location = useLocation();
  
  useEffect(() => {
    dispatch(resetarBusca())
  }, [location.pathname])

  return(
    <div className={styles.busca}>
      <input
        className={styles.input}
        placeholder='O que você procura?'
        value={busca}
        onChange={evento => dispatch(mudarBusca(evento.target.value))}
        />
    </div>
  )
}