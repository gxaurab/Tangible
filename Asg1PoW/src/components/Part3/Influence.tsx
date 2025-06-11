import { ListRenderer } from "./ListRenderer";

type Book = {
  id: number;
  name: string;
  title: string;
  author: string;
};

const books: Book[] = [
  {
    id: 1,
    name: "Parijat",
    title: "Sirish Kada Phool",
    author: "Parijat herself",
  },
  {
    id: 2,
    name: "Karnali Blues",
    title: "Chisapani",
    author: "Budhhi Sagar",
  },
  {
    id: 3,
    name: "Neural Network",
    title: "Hands-on with Deep Learning",
    author: "Ravicharan et. al",
  },
];

export const Influence3 = () => {
  return (
    <div className="p-3 max-w-xl mx-auto bg-white rounded-lg">
      <h1 className="text-2xl font-bold mb-4">I am using a reusable function to render all this</h1>

      <ListRenderer
        items={books}
        renderItem={(book) => (
          <div className="border p-4 rounded bg-slate-100">
            <h2 className="text-lg font-semibold">{book.name}</h2>
            <p className="text-sm ">Title: {book.title}</p>
            <p className="text-sm">Author: {book.author}</p>
          </div>
        )}
      />
    </div>
  );
};
