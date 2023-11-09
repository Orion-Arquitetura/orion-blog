import { PostsContext } from "@/contexts/postsContext";
import { Post } from "@/types/types";
import Link from "next/link";
import { useContext, useState } from "react";
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
  function slide(ev: any) {
    const carrossel = document.querySelector(".carrossel-overflow") as HTMLDivElement;
    const panelWidth = carrossel.querySelector(".carrossel-item")!.scrollWidth as number;

    if (ev.target.value === "left") {
      carrossel.scrollBy({
        left: panelWidth,
        behavior: "smooth",
      });
      return;
    }

    carrossel.scrollBy({
      left: -panelWidth,
      behavior: "smooth",
    });
  }

  function formatDate(date: string) {
    const data = new Date(date);
    const day = data.getDate().toString().padStart(2, "0");
    const month = (data.getMonth() + 1).toString().padStart(2, "0");
    const year = data.getFullYear();

    const brazilDate = `${day}/${month}/${year}`;
    return brazilDate;
  }

  const { postsDestaques, isLoading } = useContext(PostsContext)

  return (
    <StyledCarrossel>
      <div className="carrossel-container">
        <div className="carrossel-overflow">
          <button className="button-left" value="left" onClick={slide} />
          <button className="button-right" value="right" onClick={slide} />
          {(postsDestaques.length === 0) || isLoading ? (
            <>
              <div
                className="carrossel-item"
                style={{ backgroundImage: `url("/SIMBOLO_ORION.png")`, backgroundSize: "contain" }}
              >
                <div className="carrossel-item-link-backdrop">

                </div>
              </div>
            </>
          ) : (
            postsDestaques.map(post => {
              if (!post.emDestaque) {
                return null;
              }

              return (
                <div
                  className="carrossel-item"
                  key={post.titulo}
                  style={{ backgroundImage: `url(${post.imagemBanner})` }}
                >
                  <Link className="carrossel-item-link-backdrop" href={`/post?id=${post._id}`}>
                    <div className="carrossel-item-link-data">
                      <p>{post.resumo}</p>
                      <h2>{post.titulo}</h2>
                      <small>{formatDate(post.createdAt)}</small>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </StyledCarrossel>
  );
}
