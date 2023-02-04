import PostRecomendado from 'componentes/PostRecomendado'
import styles from './PostModelo.module.css'
import { useLocation } from 'react-router-dom';

export default function PostModelo({ children, fotoCapa, titulo }) {
  
  return (
    <article className={styles.postModeloContainer}>
        <div
            className={styles.fotoCapa}
            style={{ backgroundImage: `url(${fotoCapa})` }}
        ></div>

        <h2 className={styles.titulo}>
            {titulo}
        </h2>

        <div className={styles.postConteudoContainer}>
            {children}
        </div>
    </article>
  )
}
