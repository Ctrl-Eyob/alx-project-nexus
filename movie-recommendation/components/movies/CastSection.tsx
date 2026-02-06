// components/movies/CastSection.tsx
import { CastMember } from '@/types/movie';
import { User } from 'lucide-react';

interface CastSectionProps {
  cast: CastMember[];
}

export default function CastSection({ cast }: CastSectionProps) {
  if (cast.length === 0) {
    return (
      <div className="text-center py-8">
        <User className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">No cast information available</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Cast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cast.map((member) => (
          <div key={member.id} className="text-center">
            <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-xl">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-600" />
                </div>
              )}
            </div>
            <h3 className="font-semibold truncate">{member.name}</h3>
            <p className="text-sm text-gray-400 truncate">{member.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}