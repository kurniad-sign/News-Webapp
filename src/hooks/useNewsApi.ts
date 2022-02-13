import { useEffect, useState } from "react";
import { Articles, Categories } from "../types/APIResponse";

const useNewsApi = (
  pageSize: number = 20,
  categories: Categories | string = ""
) => {
  const [url, setUrl] = useState<Articles[]>([]);

  useEffect(() => {
    if (!categories) {
      (async () => {
        const api = `https://newsapi.org/v2/top-headlines?country=id&pageSize=${pageSize}&apiKey=f723c97fd2914e71be3d1d507bd4cc13`;
        const response = await fetch(api);
        const json = await response.json();
        setUrl(json.articles);
      })();
    }
    if (categories) {
      (async () => {
        const api = `https://newsapi.org/v2/top-headlines?country=id&category=${categories}&pageSize=${pageSize}&apiKey=f723c97fd2914e71be3d1d507bd4cc13`;
        const response = await fetch(api);
        const json = await response.json();
        setUrl(json.articles);
      })();
    }
  }, [categories, pageSize]);

  return url;
};

export default useNewsApi;
