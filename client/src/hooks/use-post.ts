// src/hooks/useBlogs.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, fetchAllPost } from "../services/post";
import type { PostsResponse } from "../types/post";

// Fetch all blog posts
export const usePost = () =>
  useQuery<PostsResponse, Error>({
    queryKey: ["posts"],
    queryFn: fetchAllPost,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: true,
  });

// Create a new post and refetch the posts
export const useCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost, // expects CreatePostPayload
    onSuccess: () => {
      // Real-time UI update after creating a post
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error: Error) => {
      console.error("Error creating post:", error.message);
    },
  });
};
