import RootLayout from "@/components/_layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PostsContextProvider from "@/contexts/postsContext";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <PostsContextProvider>
          <Component {...pageProps} />
        </PostsContextProvider>
      </RootLayout>
    </QueryClientProvider>
  );
}
