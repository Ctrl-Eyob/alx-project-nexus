import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import tmdb from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/spinner";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchHomeMovies = async () => {
      try {
        const [popularRes, upcomingRes] = await Promise.all([
          tmdb.get("/movie/popular"),
          tmdb.get("/movie/upcoming"),
        ]);

        setPopular(popularRes.data.results);
        setUpcoming(upcomingRes.data.results);
      } catch (err) {
        console.error("TMDB Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeMovies();
  }, []);

  if (loading) return <Spinner />;

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Watch List */}
      <section>
        <h2 className="text-xl mb-4">Watch List</h2>
        <div className="flex gap-6 overflow-x-auto">
          {popular.slice(0, 6).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Upcoming Movies */}
      <section>
        <h2 className="text-xl mb-4">Upcoming Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {upcoming.slice(0, 8).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Top Rated */}
      <section>
        <h2 className="text-xl mb-4">Top Rated</h2>
        <ol className="space-y-4">
          {popular.slice(0, 4).map((movie, i) => (
            <li key={movie.id} className="flex items-center gap-4">
              <span className="text-nexusOrange font-bold">{i + 1}</span>
              <img 
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                className="w-12 rounded-lg" 
                alt={movie.title}
              />
              <div>
                <p className="font-medium">{movie.title}</p>
                <span className="text-sm text-nexusGray">
                  {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}