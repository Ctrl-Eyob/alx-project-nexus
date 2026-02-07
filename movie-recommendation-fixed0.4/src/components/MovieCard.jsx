import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <img
        src={movie.poster}
        alt={movie.title}
        className="rounded-xl hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
}
