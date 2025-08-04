import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface Item {
  id: number;
  text: string;
}

// Fake in-memory data store
let items: Item[] = [
  { id: 1, text: "First item" },
  { id: 2, text: "Second item" },
];

export default function LearningTanStack() {
  const queryClient = useQueryClient();
  const [idCount, setIdCount] = useState(3);

  // Simulate GET
  const getItems = async (): Promise<Item[]> => {
    console.log("GET triggered");
    return new Promise((resolve) => {
      setTimeout(() => resolve([...items]), 300);
    });
  };

  // Simulate POST
  const addItem = async () => {
    console.log("POST triggered");
    return new Promise((resolve) => {
      setTimeout(() => {
        items.push({ id: idCount, text: `Item ${idCount}` });
        setIdCount((prev) => prev + 1);
        resolve(true);
      }, 300);
    });
  };

  const { data, isLoading } = useQuery<Item[]>({
    queryKey: ["items"],
    queryFn: getItems,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });

  const mutation = useMutation({
    mutationFn: addItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  return (
    <div>
      <h2>List of Items</h2>
      {isLoading && <p>Loading...</p>}
      {data?.map((item) => (
        <p key={item.id}>{item.text}</p>
      ))}

      <button onClick={() => mutation.mutate()}>
        Add Item (Triggers Invalidate)
      </button>
    </div>
  );
}
