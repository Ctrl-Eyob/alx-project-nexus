import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/molecules/Navbar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MovieRec - Personalized Movie Recommendations',
  description: 'Discover and save your favorite movies with AI-powered recommendations',
  keywords: ['movies', 'recommendations', 'entertainment', 'streaming'],
  authors: [{ name: 'MovieRec Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#0f172a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors`}>
        <ThemeProvider>
          <Providers>
            <div className="min-h-screen">
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                {children}
              </main>
              <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
                <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
                  <p>© 2024 MovieRec. Powered by TMDB API.</p>
                  <p className="text-sm mt-2">
                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                  </p>
                </div>
              </footer>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}