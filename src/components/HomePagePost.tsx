/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styled from "styled-components";

const StyledPost = styled.li`
  color: white;
  width: calc(50% - 15px);
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  max-height: 400px;
  overflow: hidden;
  justify-content: space-between;

  a {
    color: white;
  }

  h3 {
    font-size: 0.9rem;
  }

  p {
    text-overflow: ellipsis;
    display: block;
    font-size: 0.7rem;
  }

  .image-parent-context {
    position: relative;
    width: 370px;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: white;
    }
  }

  .continuar-lendo {
    width: fit-content;
    align-self: self-end;
    padding: 12px 24px;
    font-size: 0.7rem;
    background-color: rgb(166, 166, 166);
    text-align: center;
    border-radius: 3px;
    color: rgb(72, 72, 72);
    font-weight: bold;

    &:hover,
    &:focus {
      background-color: white;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;

    .image-parent-context {
      position: relative;
      width: 100%;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: white;
      }
    }
  }
`;

export default function HomePagePost({
    titulo,
    data,
    imagem,
    resumo,
    _id,
}: {
    titulo: string;
    data: string;
    imagem: string;
    resumo: string;
    _id: string;
}) {
    return (
        <StyledPost>
            <Link className="image-parent-context" href={`/post?id=${_id}`}>
                <img src={imagem} alt="Orion" />
            </Link>
            <Link className="post-link" href={`/post?id=${_id}`}>
                <small>{data}</small>
                <h3>{titulo}</h3>
            </Link>
            <p>{resumo.length > 150 ? resumo.slice(0, 150) + "..." : resumo}</p>
            <Link href={`/post?id=${_id}`} className="continuar-lendo">
                CONTINUAR LENDO
            </Link>
        </StyledPost>
    );
}
