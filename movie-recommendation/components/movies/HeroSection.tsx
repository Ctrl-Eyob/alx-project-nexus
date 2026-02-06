// components/movies/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';

const heroMovies = [
  {
    id: '1',
    title: 'SPIDER-MAN: No Way Home',
    subtitle: 'December 17',
    image: '/api/placeholder/1200/600',
  },
  {
    id: '2',
    title: 'JURASSIC WORLD: Dominion',
    subtitle: 'Now in Theaters',
    image: '/api/placeholder/1200/600',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroMovies.length) % heroMovies.length);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(17,24,39,1) 100%), url(${heroMovies[currentSlide].image})`,
          opacity: 1,
        }}
      />
      
      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            What do you
            <br />
            want to watch?
          </h1>
          
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar />
          </div>
          
          {/* Hero Movie Info */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{heroMovies[currentSlide].title}</h2>
            <p className="text-xl text-gray-300">{heroMovies[currentSlide].subtitle}</p>
            <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors mt-4">
              <Play className="w-5 h-5" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-red-600' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}