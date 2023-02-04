import PostCard from 'componentes/PostCard';
import React from 'react'

export default function PostRecomendado({ postId, posts }) {
    const listaNum = [];
    const tamanhoLista = posts.length;
    if (tamanhoLista < 4 || !tamanhoLista) {
        return
    }
    for (let x = 0; x < 4;) {
        let num = parseInt(Math.random() * tamanhoLista);
        if (num > 0 && num !== postId && !listaNum.includes(num)) {
            listaNum.push(num);
            x++;
        }

    }

    const recomendacao = posts.filter(post => listaNum.includes(post.id));
    console.log(recomendacao)
    return (recomendacao.map((post) => {
        return (
            <li key={post.id}>
                <PostCard post={post} />
            </li>
        )
    }))
}
