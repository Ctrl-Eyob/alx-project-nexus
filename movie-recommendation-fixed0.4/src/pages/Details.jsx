import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import tmdb from "../services/tmdb";
import { Star, Clock, Calendar } from "lucide-react";

// If you have these components, import them:
// import Spinner from "../components/Spinner";
// import CastCard from "../components/CastCard";

export default function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL || "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [movieRes, castRes] = await Promise.all([
          tmdb.get(`/movie/${id}`),
          tmdb.get(`/movie/${id}/credits`)
        ]);

        setMovie(movieRes.data);
        setCast(castRes.data.cast.slice(0, 12));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  // Simple loading spinner (replace with your Spinner component if you have one)
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nexusOrange"></div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="text-center py-8 text-white">
        <h1 className="text-2xl font-bold">Movie not found</h1>
      </div>
    );
  }

  return (
    <div className="px-10 space-y-10 text-white">
      {/* Movie Details */}
      <div className="flex flex-col md:flex-row gap-10">
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          className="w-64 h-auto rounded-xl"
          alt={movie.title}
        />

        <div className="space-y-4 flex-1">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-300">{movie.overview}</p>

          <div className="flex flex-wrap gap-6 text-gray-300">
            <span className="flex items-center gap-2">
              <Calendar size={18} /> {movie.release_date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} /> {movie.runtime} min
            </span>
            <span className="flex items-center gap-2 text-nexusOrange">
              <Star size={18} /> {movie.vote_average.toFixed(1)}
            </span>
          </div>

          {/* Genres */}
          {movie.genres && movie.genres.length > 0 && (
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">Genres</h3>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map(genre => (
                  <span 
                    key={genre.id} 
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Cast Section */}
      {cast.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {cast.map(actor => (
              actor.profile_path ? (
                <div key={actor.id} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
                    <img 
                      src={`${IMAGE_URL}${actor.profile_path}`}
                      alt={actor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-sm text-center">{actor.name}</h4>
                  <p className="text-xs text-gray-400 text-center">{actor.character}</p>
                </div>
              ) : null
            ))}
          </div>
        </div>
      )}
    </div>
  );
}