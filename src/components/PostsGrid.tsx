import { useState } from "react";
import styled from "styled-components";
import HomePagePost from "./HomePagePost";
import { useGetAllPosts } from "@/hooks/posts";
import { Post } from "@/types/types";

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

export default function PostsGrid({ posts }: { posts: { data: Post[] } }) {
    function formatDate(date: string) {
        const data = new Date(date);
        const day = data.getDate().toString().padStart(2, "0");
        const month = (data.getMonth() + 1).toString().padStart(2, "0");
        const year = data.getFullYear();

        const brazilDate = `${day}/${month}/${year}`;
        return brazilDate;
    }

    return (
        <StyledGrid>
            {posts.data.map((post: Post) => {
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
