import { useGetAllPosts } from "@/hooks/posts"
import { Post } from "@/types/types"
import { ReactNode, createContext } from "react"

type PostsContextType = {
    posts: Post[],
    postsDestaques: Post[],
    isLoading: boolean
}

export const PostsContext = createContext({} as PostsContextType)

export default function PostsContextProvider({ children }: { children: ReactNode }) {
    const { data: posts, isLoading } = useGetAllPosts();

    const postsDestaques = isLoading ? [] : posts!.data.filter(post => post.emDestaque)

    return (
        <PostsContext.Provider value={{ posts: posts ? posts.data : [], postsDestaques, isLoading }}>
            {children}
        </PostsContext.Provider>
    )
}