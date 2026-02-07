import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

const genres = ["All", "Action", "Comedy", "Adventure", "Romance", "Sci-Fi"];

export default function Search() {
  const [genre, setGenre] = useState("All");

  const filtered =
    genre === "All"
      ? movies
      : movies.filter(m => m.genre === genre);

  return (
    <div className="px-10 space-y-8">
      <h1 className="text-3xl font-bold">Upcoming Movies</h1>

      {/* Genre Filter */}
      <div className="flex gap-3 flex-wrap">
        {genres.map(g => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={`px-4 py-1 rounded-full text-sm ${
              genre === g
                ? "bg-white text-black"
                : "bg-[#2a2935]"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
