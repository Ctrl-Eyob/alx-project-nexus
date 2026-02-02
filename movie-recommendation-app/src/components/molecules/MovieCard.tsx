// src/components/molecules/MovieCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  movieId: number;
  title: string;
  poster: string;
}

export const MovieCard = ({ movieId, title, poster }: Props) => (
  <Link href={`/movies/${movieId}`}>
    <div className="rounded-lg overflow-hidden hover:scale-105 transition">
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt={title}
        width={300}
        height={450}
      />
      <p className="p-2 font-semibold">{title}</p>
    </div>
  </Link>
);
