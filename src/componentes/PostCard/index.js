import BotaoPrincipal from 'componentes/BotaoPrincipal'
import { Link } from 'react-router-dom'
import styles from './Post.module.css'

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      {/* Quando a string da propriedade to não inicia com uma barra / relativo ao endereço atual, ou seja, ele vai adicionar posts/numeroDoPost ao final da URL. */}
      <div className={styles.post}>
        <img 
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  )
}
