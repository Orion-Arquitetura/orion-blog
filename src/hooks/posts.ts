import { useQuery } from "@tanstack/react-query";

async function getAllPosts() {
  const resposta = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://orion-blog-backend.onrender.com"
    }/posts/getAllPosts`
  ).then((res) => res.json());

  return resposta;
}

async function getOnePost(postID: string) {
  const resposta = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://orion-blog-backend.onrender.com"
    }/posts/getOnePost?id=${postID}`
  ).then((res) => res.json());

  return resposta;
}

////////////////////////////

export const useGetAllPosts = () => {
  return useQuery({
    queryKey: ["all-posts"],
    queryFn: getAllPosts,
  });
};

export const useGetOnePost = (postID: string) => {
  return useQuery({
    queryKey: ["one-post"],
    queryFn: () => getOnePost(postID),
  });
};
