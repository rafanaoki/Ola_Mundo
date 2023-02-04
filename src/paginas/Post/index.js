import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css';
import NaoEncontrada from 'paginas/Naoencontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostRecomendado from 'componentes/PostRecomendado';

export default function Post() {
    const parametros = useParams(); // Hook
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo 
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div>
                            <ReactMarkdown className='post-markdown-container'>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <div className='container__recomendado'>
                            <h2>Outros post que talvez você se interesse!!</h2>
                            <ul className='recomendado'>
                                <PostRecomendado postId={post.id} posts={posts} />
                            </ul>
                        </div>
                    </PostModelo>
                }
                ></Route>
            </Route>
        </Routes>
    )
}
