import { useState } from "react"
import styled from "styled-components"
import HomePagePost from "./HomePagePost"
import { useGetAllPosts } from "@/hooks/posts"

const StyledGrid = styled.ul`
    display: flex;
    flex-direction: row;
    padding-inline: 16px;
    gap: 30px;
    flex-wrap: wrap;
`

export default function PostsGrid() {
    function formatDate(date: string) {
        const data = new Date(date);
        const day = data.getDate().toString().padStart(2, '0');
        const month = (data.getMonth() + 1).toString().padStart(2, '0');
        const year = data.getFullYear();

        const brazilDate = `${day}/${month}/${year}`;
        return brazilDate;
    }

    const { data: posts, isLoading } = useGetAllPosts()

    return (
        <StyledGrid>
            {!isLoading && posts.data.map((post:any) => {
                return (
                    <HomePagePost key={post.titulo} titulo={post.titulo} data={formatDate(post.createdAt)} imagem={post.imagemBanner} resumo={post.resumo} _id={post._id} />
                )
            })}
        </StyledGrid>
    )
}