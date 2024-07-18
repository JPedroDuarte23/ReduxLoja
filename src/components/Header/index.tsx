import styles from './Header.module.scss'
import TituloSemImagem from './TituloSemImagem'
import TituloComImagem from './TituloComImagem'

export type HeaderProps = {
  titulo?: string,
  descricao?: string,
  className?: string,
  imagem?: string
}


export default function Header({ titulo, descricao, className = '', imagem}: HeaderProps) {
  return (
    <header className={styles.header}>
      {titulo && !imagem &&
        <TituloSemImagem
          titulo={titulo}
          descricao={descricao}
        />
      }
      {titulo && imagem &&
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      }
    </header>
  )
}