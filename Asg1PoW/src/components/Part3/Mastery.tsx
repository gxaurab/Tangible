import { useState } from "react"
import { books } from "./book"

export const Mastery3 = () => {
  const [selectedGenre, setSelectedGenre] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value)
  }

  const filteredBooks =
    selectedGenre === "" ? books : books.filter((book) => book.genre === selectedGenre)

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Filter Books by Genre</h1>

      <label className="mb-4">
        <span className="block mb-1 text-lg font-medium text-gray-700">Choose a Genre:</span>
        <select
          className="px-4 py-2 rounded-lg bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedGenre}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="Philosophy">Philosophy</option>
          <option value="Real Life">Real Life</option>
          <option value="Science">Science</option>
          <option value="Biopic">Biopic</option>
        </select>
      </label>

      <div className="mt-6 w-full max-w-md space-y-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="p-4 bg-white rounded-xl shadow-md border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-blue-600">{book.name}</h2>
              <p className="text-gray-700">Title: {book.title}</p>
              <p className="text-gray-500 italic">By {book.author}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-4">No books found for selected genre.</p>
        )}
      </div>
    </div>
  )
}
