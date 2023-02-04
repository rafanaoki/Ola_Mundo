import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.png'
import React from 'react'

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Rafael !
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Universidade Federal do ABC (UFABC), no qual o cursava Engenharia de
                Controle e Automoção. Tive contato com a programação pela primeira vez nas aulas de Bases Computacionais, onde aprendi lógica de programação e o básico da linguagem Python.
            </p>
            <p className={styles.paragrafo}>
                A minha paixão aumentou no momento que tive aulas de Processamento da Informação. Nelas eram realizadas exercícios de
                lógica de programação, desafios que envolviam criatividade. Nesse momento, percebi que deveria cursar Ciência da Computação.
            </p>
            <p className={styles.paragrafo}>
                Assim, junto com o ensino superior, me matrículei na Alura, com intuito de me aprofundar na área e também pelo motivo de que a plataforma possui diversos cursos no qual posso estudar e descobrir a carreira que quero seguir.

            </p>
            <p className={styles.paragrafo}>
                Neste 6 meses de estudo na Alura, foquei no aprendizado nas linguagens de programação
                Python, Node.js, também no Desenvolvimento Front-End (HTML, CSS, Javascript e React) e pretendo estudar o Desenvolvimento Mobile (React Native). Considero minha habilidades como iniciante ainda, contudo, busco melhorar minhas
                habilidades e crescimento constante até que me torne um ótimo profissinal na área de Tecnologia.
            </p>
        </PostModelo>
    )
}
