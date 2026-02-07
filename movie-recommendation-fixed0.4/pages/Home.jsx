import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="px-10 space-y-16">

      {/* Hero Search */}
      <div className="flex items-center gap-4">
        <button className="bg-nexusOrange px-6 py-3 rounded-full font-semibold">
          What do you want to watch?
        </button>

        <div className="flex items-center bg-[#2a2935] px-4 py-3 rounded-full w-full">
          <Search className="text-nexusGray" />
          <input
            className="bg-transparent ml-3 outline-none w-full"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Watch List */}
      <section>
        <h2 className="text-xl mb-4">Watch List</h2>
        <div className="flex gap-6 overflow-x-auto">
          {movies.slice(0, 6).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Top Rated */}
      <section>
        <h2 className="text-xl mb-4">Top Rated</h2>
        <ol className="space-y-4">
          {movies.slice(0, 4).map((movie, i) => (
            <li key={movie.id} className="flex items-center gap-4">
              <span className="text-nexusOrange font-bold">{i + 1}</span>
              <img src={movie.poster} className="w-12 rounded-lg" />
              <div>
                <p>{movie.title}</p>
                <span className="text-sm text-nexusGray">
                  {movie.release}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
