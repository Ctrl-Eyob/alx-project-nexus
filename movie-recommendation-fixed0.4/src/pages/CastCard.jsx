
export default function CastCard({ actor }) {
  const IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL || "https://image.tmdb.org/t/p/w200";
  
  if (!actor.profile_path) return null;
  
  return (
    <div className="flex flex-col items-center">
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
  );
}