import { useContext, useState } from "react";
import styled from "styled-components";
import HomePagePost from "./HomePagePost";
import { Post } from "@/types/types";
import { PostsContext } from "@/contexts/postsContext";

const StyledGrid = styled.ul`
  display: flex;
  flex-direction: row;
  padding-inline: 16px;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-bottom: 100px;
  }
`;

export default function PostsGrid() {
    function formatDate(date: string) {
        const data = new Date(date);
        const day = data.getDate().toString().padStart(2, "0");
        const month = (data.getMonth() + 1).toString().padStart(2, "0");
        const year = data.getFullYear();

        const brazilDate = `${day}/${month}/${year}`;
        return brazilDate;
    }

    const { posts, isLoading } = useContext(PostsContext)

    if (isLoading) {
        return <div>Carregando...</div>
    }

    return (
        <StyledGrid>
            {posts.map((post: Post) => {
                return (
                    <HomePagePost
                        key={post.titulo}
                        titulo={post.titulo}
                        data={formatDate(post.createdAt)}
                        imagem={post.imagemBanner}
                        resumo={post.resumo}
                        _id={post._id}
                    />
                );
            })}
        </StyledGrid>
    );
}
