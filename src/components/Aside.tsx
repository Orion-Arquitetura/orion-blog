/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import NewsletterForm from "./NewsletterForm";
import { useState } from "react";
import { Post } from "@/types/types";

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

    .posts-destaque-list {
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

  @media (max-width: 1000px) {
    position: static;

    .posts-destaque-div {
      text-align: center;
    }
  }
`;

export default function Aside({ posts }: { posts: { data: Post[] } }) {

  const postsDestaque = posts.data.filter((post) => post.emDestaque);

  return (
    <StyledAside>
      <NewsletterForm />

      <div className="aside-social-media-div">
        <ul>
          <li>
            <a href="">
              <img src="/linkedin.svg" alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/youtube.svg" alt="youtube" />
            </a>
          </li>
        </ul>
      </div>

      <div className="posts-destaque-div">
        <h3>POSTS EM DESTAQUE</h3>

        <ul className="posts-destaque-list">
          {postsDestaque.map((post) => {
            return (
              <li key={post.titulo} className="destaque-post">
                <a href={"#"}>
                  <h4>{post.titulo}</h4>
                </a>
                <p>{post.resumo.length > 150 ? post.resumo.slice(0, 150) + "..." : post.resumo}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledAside>
  );
}
