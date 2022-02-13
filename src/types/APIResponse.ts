export type Categories =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

export interface Articles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface ArticlesAPIResponse {
  status: string;
  totalResults: number;
  articles: Articles[];
}
