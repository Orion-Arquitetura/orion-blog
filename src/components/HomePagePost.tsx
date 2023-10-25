/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
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

    &:hover, &:focus {
            background-color: white;
        }
    }
`;

export default function HomePagePost({
    titulo,
    data,
    imagem,
    resumo,
}: {
    titulo: string;
    data: string;
    imagem: string;
    resumo: string;
}) {
    return (
        <StyledPost>
            <a className='image-parent-context' href="#">
                <img src={imagem} alt="Orion" />
            </a>
            <a className='post-link' href="#">
                <small>{data}</small>
                <h3>{titulo}</h3>
            </a>
            <p>{resumo.length > 150 ? resumo.slice(0, 150) + "..." : resumo}</p>
            <a className="continuar-lendo">CONTINUAR LENDO</a>
        </StyledPost>
    );
}
