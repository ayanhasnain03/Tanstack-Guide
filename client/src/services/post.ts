// src/services/post.ts
import type { CreatePostPayload, Post, PostsResponse } from "../types/post";

const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL) {
  throw new Error("Missing VITE_API_URL env variable");
}

export const fetchAllPost = async (): Promise<PostsResponse> => {
  const res = await fetch(`${BASE_URL}/post/all`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const createPost = async (payload: CreatePostPayload): Promise<Post> => {
  const res = await fetch(`${BASE_URL}/post/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json().then(data => data.post);
};
