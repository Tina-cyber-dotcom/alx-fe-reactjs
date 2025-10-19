import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  };

  const {
    data: posts,
    isLoading,
    isError,
    error,          
    refetch,
  } = useQuery(["posts"], fetchPosts, {
    cacheTime: 1000 * 60 * 5,         
    refetchOnWindowFocus: false,     
    keepPreviousData: true,          
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} style={{ marginBottom: "10px" }}>
        Refetch Posts
      </button>

      <ul>
        {posts?.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


