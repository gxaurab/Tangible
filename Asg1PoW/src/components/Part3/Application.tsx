// Render lists of items using .map() and assign unique keys to each item to avoid warnings.

import { books } from "./book"

// Display a static list of books or movies from a hardcoded array, rendering each item’s title and author.

export const Application3 = () => {

  return (
    <div className="flex flex-col p-4 sm:flex sm:flex-row  sm:gap-5 ">
      <h1 className="text-2xl">I am using map for to list and render </h1>
      <ul className="list-disc bg-amber-50 m-4  pl-6 space-y-2">
        {books.map((book) => (
          <li key={book.id} className="text-gray-800">
            <strong>{book.name}</strong> by {book.author} (from <em>{book.title}</em>)
          </li>
        ))}
      </ul>
    </div>
  )
}
