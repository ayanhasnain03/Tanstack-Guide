// src/hooks/useBlogs.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAllPost } from "../services/post";
import type { PostsResponse } from "../types/post";


export function usePost() {
  return useQuery<PostsResponse, Error>({
    queryKey: ["posts"],
    queryFn: fetchAllPost,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });
}
