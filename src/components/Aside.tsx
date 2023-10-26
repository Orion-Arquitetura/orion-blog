/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import NewsletterForm from "./NewsletterForm";
import { useState } from "react";

const StyledAside = styled.aside`
  position: sticky;
  position: -webkit-sticky;
  top: 140px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  color: white;

  .aside-social-media-div {
    width: 80%;
    margin-inline: auto;

    ul {
        display: flex;
        justify-content: center;
        column-gap: 8px;

        li {
            background: white;
            border-radius: 100px;
            width: fit-content;

            a {
                aspect-ratio: 1/1;
                width: 32px;
                height: 32px;
                padding: 5px;
                display: grid;
                place-items: center;
            }

            a img {
                width: 90%;
            }
        }
    }
  }

  .posts-destaque-div {
    width: 80%;
    margin-inline: auto;
    text-align: right;

    display: flex;
    flex-direction: column;
    row-gap: 26px;

    .posts-destaque-list{
        display: flex;
        flex-direction: column;
        row-gap: 20px;

        .destaque-post {
            display: flex;
            flex-direction: column;
            row-gap: 10px;

            h4 {
                font-size: 0.8rem;
            }

            p {
                font-size: 0.6rem;
            }
        }
    }

  }
`;

export default function Aside() {
    const [postsDestaque, setPostsDestaque] = useState([
        {
            data: "24/10/2023",
            titulo: "Tendências em Design Hospitalar",
            imagem: "https://images.pexels.com/photos/7089336/pexels-photo-7089336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            resumo: "Este post explora as tendências atuais em design hospitalar, incluindo o uso de cores, materiais e tecnologias inovadoras para criar espaços mais acolhedores e eficientes para os pacientes."
        },
        {
            data: "23/10/2023",
            titulo: "A Importância da Acessibilidade em Hospitais",
            imagem: "https://images.pexels.com/photos/7335565/pexels-photo-7335565.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Neste artigo, discutimos a importância da acessibilidade em hospitais e como o design inclusivo pode melhorar a experiência de pacientes com mobilidade reduzida."
        },
        {
            data: "22/10/2023",
            titulo: "Inovações em Tecnologia Hospitalar",
            imagem: "https://images.pexels.com/photos/11722768/pexels-photo-11722768.jpeg?auto=compress&cs=tinysrgb&w=600",
            resumo: "Descubra as últimas inovações em tecnologia hospitalar, incluindo sistemas de informação, dispositivos médicos avançados e como eles estão transformando o setor de saúde."
        },
    ])

    return (
        <StyledAside>
            <NewsletterForm />
            
            <div className="aside-social-media-div">
                <ul>
                    <li>
                        <a href=""><img src="/linkedin.svg" alt="linkedin" /></a>
                    </li>
                    <li>
                        <a href=""><img src="/instagram.svg" alt="instagram" /></a>
                    </li>
                    <li>
                        <a href=""><img src="/youtube.svg" alt="youtube" /></a>
                    </li>
                </ul>
            </div>

            <div className="posts-destaque-div">
                <h3>POSTS EM DESTAQUE</h3>

                <ul className="posts-destaque-list">
                    {postsDestaque.map(post => {
                        return (
                            <li key={post.titulo} className="destaque-post">
                                <a href={"#"}><h4>{post.titulo}</h4></a>
                                <p>{post.resumo.length > 150 ? post.resumo.slice(0, 150) + "..." : post.resumo}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </StyledAside>
    );
}
