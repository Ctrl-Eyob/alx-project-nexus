// app/(home)/page.tsx
import HeroSection from '@/components/movies/HeroSection';
import MovieGrid from '@/components/movies/MovieGrid';
import { nowPlayingMovies, topRatedMovies } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Now Playing Section */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Now Playing</h2>
          <a href="/now-playing" className="text-red-500 hover:text-red-400 transition-colors">
            View All →
          </a>
        </div>
        <MovieGrid movies={nowPlayingMovies.slice(0, 4)} />
      </section>
      
      {/* Top Rated Preview */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Top Rated</h2>
          <a href="/top-rated" className="text-red-500 hover:text-red-400 transition-colors">
            View All →
          </a>
        </div>
        <MovieGrid movies={topRatedMovies.slice(0, 4)} />
      </section>
    </div>
  );
}