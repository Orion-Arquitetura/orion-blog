import Aside from "@/components/Aside";
import Carrossel from "@/components/Carrossel";
import PostsGrid from "@/components/PostsGrid";
import { useGetAllPosts } from "@/hooks/posts";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  position: relative;
  height: fit-content;
  margin-top: 36px;
  padding-bottom: 100px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding-bottom: 30px;
  } 
`;

export default function Home() {
  const { data: posts, isLoading } = useGetAllPosts()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Carrossel posts={posts} />
      <StyledGrid>
        <PostsGrid posts={posts} />
        <Aside posts={posts} />
      </StyledGrid>
    </>
  )
}
