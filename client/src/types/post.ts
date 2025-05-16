export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface PostsResponse {
  posts: Post[];
}
export interface CreatePostPayload {
  title: string;
  content: string;
}
