export type Post = {
  _id: string;
  titulo: string;
  resumo: string;
  imagemBanner: string;
  conteudo: string;
  autor: string;
  upvotes: number;
  downvotes: number;
  rascunho: boolean;
  emDestaque: boolean;
  createdAt: string;
};
