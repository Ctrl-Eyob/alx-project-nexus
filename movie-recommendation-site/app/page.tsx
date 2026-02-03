'use client';

import { useQuery } from '@tanstack/react-query';
import { MovieGrid } from '@/components/organisms/MovieGrid';
import { HeroSection } from '@/components/organisms/HeroSection';
import { CategoryTabs } from '@/components/molecules/CategoryTabs';
import { SkeletonGrid } from '@/components/atoms/Skeleton';
import { tmdb } from '@/lib/api';

export default function HomePage() {
  const { data: trending, isLoading, error } = useQuery({
    queryKey: ['trending'],
    queryFn: () => tmdb.getTrendingMovies(1),
    staleTime: 5 * 60 * 1000,
  });

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600">Failed to load movies</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Please check your connection and try again.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <HeroSection />
      <CategoryTabs />
      
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Trending Now
        </h2>
        {isLoading ? (
          <SkeletonGrid count={8} />
        ) : (
          <MovieGrid movies={trending?.results || []} />
        )}
      </section>

      <PersonalizedRecommendations />
    </div>
  );
}

function PersonalizedRecommendations() {
  const { data: recommendations, isLoading } = useQuery({
    queryKey: ['recommendations'],
    queryFn: async () => {
      // In production, this would call your recommendation API
      // For now, get popular movies
      const popular = await tmdb.getTrendingMovies(2);
      return popular.results.slice(0, 6);
    },
  });

  if (isLoading) return null;

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Recommended For You
      </h2>
      <MovieGrid movies={recommendations || []} />
    </section>
  );
}