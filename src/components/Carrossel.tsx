import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const StyledCarrossel = styled.div`
  width: 100%;

  .carrossel-container {
    height: 470px;
    width: 100%;
    position: relative;

    .carrossel-overflow {
      height: 100%;
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */

      &::-webkit-scrollbar {
        display: none;
      }

      button {
        position: absolute;
        width: 30px;
        height: 30px;
        background: black url("/arrow.svg") no-repeat center;
        z-index: 9;
        top: 50%;
        left: calc(100% - 15px);
        translate: 0% -50%;
        border: none;

        &.button-right {
          rotate: 180deg;
          left: -15px;
        }
      }

      .carrossel-item {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .carrossel-item-link-backdrop {
          height: 100%;
          width: 100%;
          color: #e6e8dd;
          display: flex;
          align-items: flex-end;
          background-color: rgba(0, 0, 0, 0.2);
          transition: background-color 0.5s ease;
          font-weight: 600;

          & .carrossel-item-link-data {
            padding: 0 0 20px 20px;
            font-size: 0.8rem;
            width: 100%;
          }

          &:hover {
            background-color: rgba(0, 0, 0, 0.6);

            .carrossel-item-link-data p {
              opacity: 1;
              top: 0;
            }
          }

          p {
            position: relative;
            opacity: 0;
            top: 20px;
            transition: opacity 0.2s ease, top 0.4s ease;
          }
        }
      }
    }
  }
`;

export default function Carrossel() {
  const [carrosselPosts, setPosts] = useState([
    {
      img: "https://orionarquitetura.com.br/wp-content/uploads/2022/12/orion-arquitetura-hospitalar-no-rj-enfermaria-multiprofissional-jpg-124.jpg",
      title: "Projeto de Enfermaria Multiprofissional",
      date: "24/10/2023",
      description: "Este projeto de enfermaria multiprofissional visa melhorar o ambiente hospitalar, proporcionando um espaço confortável e funcional para pacientes e equipes médicas. Saiba mais sobre como a arquitetura hospitalar pode transformar o atendimento de saúde.",
      url: "/posts"
    },
    {
      img: "https://orionarquitetura.com.br/wp-content/uploads/2022/12/orion-arquitetura-hospitalar-no-rj-consultorio-de-pediatria-jpg-124.jpg",
      title: "Design Inovador para Consultório de Pediatria",
      date: "20/10/2023",
      description: "Descubra como o design arquitetônico inovador está sendo aplicado para criar consultórios de pediatria acolhedores e amigáveis para crianças, proporcionando um ambiente de tratamento seguro e agradável.",
      url: "/posts"
    },
    {
      img: "https://orionarquitetura.com.br/wp-content/uploads/2022/12/orion-arquitetura-hospitalar-no-rj-biomedicina-estetica-capa-jpg-124.jpg",
      title: "Estética e Funcionalidade na Biomedicina Estética",
      date: "14/07/2023",
      description: "A integração de estética e funcionalidade é fundamental na arquitetura de espaços para biomedicina estética. Saiba como a arquitetura hospitalar desempenha um papel importante na criação de clínicas de beleza modernas e eficientes.",
      url: "/posts"
    }
  ]);

  function slide(ev: any) {
    const carrossel = document.querySelector(".carrossel-overflow") as HTMLDivElement;
    const panelWidth = carrossel.querySelector(".carrossel-item")!.scrollWidth as number;

    if (ev.target.value === "left") {
      carrossel.scrollBy({
        left: panelWidth,
        behavior: "smooth",
      })
      return
    }

    carrossel.scrollBy({
      left: -panelWidth,
      behavior: "smooth"
    })
  }

  return (
    <StyledCarrossel>
      <div className="carrossel-container">
        <div className="carrossel-overflow">
          <button className="button-left" value="left" onClick={slide} />
          <button className="button-right" value="right" onClick={slide} />
          {carrosselPosts.map((post) => {
            return (
              <div
                className="carrossel-item"
                key={post.title}
                style={{ backgroundImage: `url(${post.img})` }}
              >
                <Link className="carrossel-item-link-backdrop" href={post.url}>
                  <div className="carrossel-item-link-data">
                    <p>{post.description}</p>
                    <h2>{post.title}</h2>
                    <small>{post.date}</small>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </StyledCarrossel>
  );
}
