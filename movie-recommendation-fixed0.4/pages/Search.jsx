import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";
import { useState } from "react";
import tmdb from "../services/tmdb";
import Spinner from "../components/Spinner";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 3) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const res = await tmdb.get("/search/movie", {
        params: { query: value },
      });
      setResults(res.data.results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-nexusDark p-8 min-h-screen">

      <input
        type="text"
        placeholder="Search for any movie..."
        className="w-full p-4 rounded-xl bg-gray-800 text-white border-2 border-nexusOrange"
        onChange={handleSearch}
      />

      {loading && <Spinner />}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {results.map(movie => (
          movie.poster_path && (
            <div key={movie.id} className="hover:scale-105 transition">
              <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                className="rounded-lg"
                alt={movie.title}
              />
              <h3 className="mt-2 font-bold">{movie.title}</h3>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

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
