// pages/Awareness.tsx
import { useFakeQuery } from "../hooks/useFakeQuery";

const Awareness = () => {
  const { data, isLoading, error } = useFakeQuery(
    "https://official-joke-api.appspot.com/random_joke"
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-lg font-bold">Joke ID: {data?.id}</h1>
      <p className="text-gray-800 mt-2">{data?.setup}</p>
      <p className="text-green-700 font-semibold mt-1">{data?.punchline}</p>
    </div>
  );
};

export default Awareness;
