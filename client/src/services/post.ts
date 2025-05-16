// src/services/post.ts
import type { PostsResponse } from "../types/post";

const BASE_URL = import.meta.env.VITE_API_URL;

if (!BASE_URL) {
  throw new Error("Missing VITE_API_URL env variable");
}

export const fetchAllPost = async (): Promise<PostsResponse> => {
  const res = await fetch(`${BASE_URL}/post/all`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};
