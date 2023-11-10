import { useGetAllPosts } from "@/hooks/posts"
import { Post } from "@/types/types"
import { ReactNode, createContext, useEffect, useState } from "react"

type PostsContextType = {
    posts: Post[],
    postsDestaques: Post[],
    isLoading: boolean
}

export const PostsContext = createContext({} as PostsContextType)

export default function PostsContextProvider({ children }: { children: ReactNode }) {
    const { data: posts, isLoading } = useGetAllPosts();
    const [postsDestaques, setPostsDestaque] = useState<[] | Post[]>([])

    useEffect(() => {
        posts ? setPostsDestaque(posts!.data.filter(post => post.emDestaque)) : () => {}
    }, [posts])

    return (
        <PostsContext.Provider value={{ posts: posts ? posts.data.filter(p => !p.rascunho) : [], postsDestaques, isLoading }}>
            {children}
        </PostsContext.Provider>
    )
}