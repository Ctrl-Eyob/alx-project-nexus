import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import tmdb from "../services/tmdb";
import Spinner from "../components/spinner";

const genres = ["All", "Action", "Comedy", "Adventure", "Romance", "Sci-Fi"];

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState("All");

  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL || "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const handleSearch = async () => {
      if (query.length < 3) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const res = await tmdb.get("/search/movie", {
          params: { query: query },
        });
        setResults(res.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      if (query) {
        handleSearch();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // Filter results by genre if needed
  const filteredResults = genre === "All" 
    ? results 
    : results.filter(movie => 
        movie.genre_ids?.some(id => {
          // You would need to map genre IDs to names
          // For now, let's keep it simple
          return true;
        })
      );

  return (
    <div className="px-10 space-y-8 min-h-screen">
      <h1 className="text-3xl font-bold">Search Movies</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for any movie..."
        className="w-full p-4 rounded-xl bg-gray-800 text-white border-2 border-nexusOrange focus:outline-none focus:ring-2 focus:ring-nexusOrange"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Genre Filter */}
      <div className="flex gap-3 flex-wrap">
        {genres.map(g => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              genre === g
                ? "bg-nexusOrange text-white"
                : "bg-[#2a2935] text-gray-300 hover:bg-[#3a3945]"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {loading && <Spinner />}

      {!loading && query && filteredResults.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No movies found for "{query}"</p>
        </div>
      )}

      {/* Results Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredResults.map(movie => (
          movie.poster_path && (
            <div key={movie.id} className="hover:scale-105 transition-transform duration-300">
              <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                className="w-full h-auto rounded-lg"
                alt={movie.title}
              />
              <h3 className="mt-2 font-bold text-sm md:text-base">{movie.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-nexusOrange">★ {movie.vote_average?.toFixed(1)}</span>
                <span className="text-gray-400 text-sm">
                  {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
                </span>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}