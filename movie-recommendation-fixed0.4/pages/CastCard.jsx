export default function CastCard({ actor }) {
  return (
    <div className="text-center space-y-2">
      <img
        src={actor.image}
        className="rounded-xl w-full h-40 object-cover"
      />
      <p className="text-sm">{actor.name}</p>
    </div>
  );
}
