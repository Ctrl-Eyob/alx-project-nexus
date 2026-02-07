import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import { cast } from "../data/cast";
import { Star, Calendar, Clock } from "lucide-react";
import { useState } from "react";
import CastCard from "../components/CastCard";

export default function Details() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));
  const [tab, setTab] = useState("about");

  return (
    <div className="px-10 space-y-10">

      {/* Header */}
      <div className="flex gap-10">
        <img src={movie.poster} className="w-64 rounded-xl" />

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-nexusGray">{movie.description}</p>

          <div className="flex gap-6 text-nexusGray">
            <span className="flex gap-2">
              <Calendar /> {movie.release}
            </span>
            <span className="flex gap-2">
              <Clock /> {movie.duration} min
            </span>
            <span className="flex gap-2 text-nexusOrange">
              <Star /> {movie.rating}/10
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-10 border-b border-[#2a2935]">
        {["about", "reviews", "cast"].map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-2 capitalize ${
              tab === t && "border-b-2 border-nexusOrange"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {tab === "cast" && (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {cast.map(actor => (
            <CastCard key={actor.id} actor={actor} />
          ))}
        </div>
      )}
    </div>
  );
}
