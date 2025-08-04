// hooks/useFakeQuery.ts
import { useState, useEffect } from "react";

type Joke = {
  id: number;
  type: string;
  setup: string;
  punchline: string;
};

export const useFakeQuery = (url: string) => {
  const [data, setData] = useState<Joke | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error("Fetch failed");
          return res.json();
        })
        .then((json) => {
          setData(json);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 2000); // simulate 2s delay

    return () => clearTimeout(timer);
  }, []);

  return { data, isLoading, error };
};
