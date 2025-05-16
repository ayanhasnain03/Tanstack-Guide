import { usePost } from "../hooks/use-post";

export const GetAllPost = () => {
  const { data, isLoading, isError, error, refetch, isFetching } = usePost();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{
          padding: "8px 16px",
          marginBottom: "1rem",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      {data?.posts.map((post: any) => (
        <div key={post.id} style={{ marginBottom: "1rem" }}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
