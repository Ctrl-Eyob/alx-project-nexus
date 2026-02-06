// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, Bell } from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar';
import { useWatchlist } from '@/context/WatchlistContext';

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'Now Playing', href: '/now-playing' },
  { name: 'Watch List', href: '/watchlist' },
  { name: 'Upcoming', href: '/upcoming' },
  { name: 'Top Rated', href: '/top-rated' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { watchlist } = useWatchlist();

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-600">
            MOVIEFLIX
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-red-500 ${
                  pathname === item.href ? 'text-red-500' : 'text-gray-300'
                }`}
              >
                {item.name}
                {item.name === 'Watch List' && watchlist.length > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs bg-red-600 rounded-full">
                    {watchlist.length}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <SearchBar />
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-2 transition-colors hover:text-red-500 ${
                    pathname === item.href ? 'text-red-500' : 'text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.name === 'Watch List' && watchlist.length > 0 && (
                    <span className="ml-2 inline-flex items-center justify-center w-6 h-6 text-sm bg-red-600 rounded-full">
                      {watchlist.length}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}