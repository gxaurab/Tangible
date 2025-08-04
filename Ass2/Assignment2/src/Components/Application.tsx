// src/components/Application.tsx

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Posts } from "../const/mockData";
import type { MockDataType } from "../const/mockData";

export const Application = () => {
  const [data, setData] = useState<MockDataType[]>(Posts);

  // Mutation function: adds new post to state and returns it
  const addPost = async (newPost: MockDataType): Promise<MockDataType> => {
    setData((prevState) => [...prevState, newPost]);
    return newPost;
  };

  // TanStack Mutation
  const mutation = useMutation({
    mutationFn: addPost,
  });

  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const newPost: MockDataType = {
      id: form.get("id") as string,
      title: form.get("title") as string,
      content: form.get("content") as string,
    };

    mutation.mutate(newPost);
    e.currentTarget.reset(); // optional: clears form after submit
  };

  return (
    <div style={{ padding: "2rem" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <label>
          Id:
          <input type="text" name="id" required />
        </label>
        <br />
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
        <br />
        <label>
          Content:
          <input type="text" name="content" required />
        </label>
        <br />
        <button type="submit">Add Post</button>
      </form>

      {/* Loading + Error UI */}
      {mutation.isPending && <p>⏳ Adding post...</p>}
      {mutation.isError && <p>❌ Error: {(mutation.error as Error).message}</p>}

      {/* Posts List */}
      {data.map((post) => (
        <div key={post.id} style={{ marginBottom: "1rem" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>ID: {post.id}</small>
        </div>
      ))}
    </div>
  );
};
