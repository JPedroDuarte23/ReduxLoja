import styles from './Navbar.module.scss'
import Logo from '../../assets/logo.svg'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri'
import Busca from '../Busca'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const iconeProps = {
  color: 'white',
  size: 24
}


export default function Navbar() {

  //NAVEGACAO
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className={styles.nav}>
      <img src={Logo} alt="Logotipo da Trato Tech" className={styles.logo} onClick={() => navigate('/')} />
      <div className={styles.links}>
        <div>
          <Link to='/' className={classNames(styles.link, {
            [styles.selected]: location.pathname === '/'
          })}>
            Página Inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
          <Busca/>
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === '/carrinho' ? <RiShoppingCartFill {...iconeProps} />: <RiShoppingCart2Line {...iconeProps}/>}
        </Link>
      </div> 
    </nav>
  )
}