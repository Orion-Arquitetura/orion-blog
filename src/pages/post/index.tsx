/* eslint-disable @next/next/no-img-element */
import Aside from "@/components/Aside";
import { useGetOnePost } from "@/hooks/posts";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import styled from "styled-components";
import DOMPurify from "dompurify";

const StyledSection = styled.section`
  position: relative;
  color: white;

  .banner-image-wrapper {
    margin-inline: auto;
    height: 65vh;
    background-color: azure;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    position: relative;
  }

  .body-and-aside-wrapper {
    display: grid;
    grid-template-columns: 70% 30%;
    margin-top: 46px;
  }

  .post-body {
    .post-main-title {
      margin-bottom: 46px;
      font-size: 2rem;
    }
    p {
      margin: 26px 0;
      &:first-of-type {
        margin-top: 0;
      }
    }
  }

  .post-feedback {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .post-rating {
      display: flex;
      column-gap: 16px;

      button {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        background-size: contain;

        &[value="up"] {
          background-image: url("/thumb_up.png");
        }

        &[value="down"] {
          background-image: url("/thumb_down.png");
        }
      }
    }

    .share-post-div {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;

      span {
        font-weight: bold;
        font-size: 1.2rem;
      }

      ul {
        display: flex;
        column-gap: 10px;
      }

      a {
        width: 35px;
        height: 35px;
        display: block;
        background-size: cover;
        background-position: center;
        filter: contrast(10%);
      }
    }
  }

  @media (max-width: 1000px) {
    .body-and-aside-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 46px;
      margin-bottom: 46px;
    }

    .post-body {
      margin-bottom: 46px;
    }

    .post-feedback {
      margin-top: 46px;
      flex-direction: column-reverse;
      row-gap: 20px;
    }
  }
`;

export default function PostPage({ postID }: { postID: string }) {
  const { data: post, isLoading } = useGetOnePost(postID);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <StyledSection>
      <div className="banner-image-wrapper">
        <img src={isLoading ? "/ORION_Logotipo.png" : post.data.imagemBanner} alt="Orion" />
      </div>

      <div className="body-and-aside-wrapper">
        <div className="post-body">
          <h1 className="post-main-title">{post.data.titulo}</h1>

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.data.conteudo, { USE_PROFILES: { html: true } }),
            }}
          ></div>

          <div className="post-feedback">
            <div className="share-post-div">
              <span>Compartilhe</span>

              <ul>
                <li>
                  <a href="$" style={{ backgroundImage: "url('/instagram.svg')" }} />
                </li>
                <li>
                  <a href="$" style={{ backgroundImage: "url('/facebook.svg')" }} />
                </li>
                <li>
                  <a href="$" style={{ backgroundImage: "url('/linkedin.svg')" }} />
                </li>
              </ul>
            </div>

            <div className="post-rating">
              <button value="up" title="Gostei! 😆" />
              <button value="down" title="Não gostei. 😒" />
            </div>
          </div>
        </div>
        <Aside />
      </div>
    </StyledSection>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query;

  return {
    props: {
      postID: query.id,
    },
  };
}
