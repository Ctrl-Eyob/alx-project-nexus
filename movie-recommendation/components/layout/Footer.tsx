// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">MOVIEFLIX</h3>
            <p className="text-gray-400">
              Discover your next favorite movie with personalized recommendations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/now-playing" className="hover:text-white transition-colors">Now Playing</a></li>
              <li><a href="/upcoming" className="hover:text-white transition-colors">Upcoming</a></li>
              <li><a href="/top-rated" className="hover:text-white transition-colors">Top Rated</a></li>
              <li><a href="/watchlist" className="hover:text-white transition-colors">Watchlist</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Genres</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Action</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comedy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Adventure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Romance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MovieFlix. All movie data is for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
}