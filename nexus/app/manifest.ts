export default function manifest() {
  return {
    name: 'NEXUS Movie App',
    short_name: 'NEXUS',
    description: 'Discover and save movies you love',
    start_url: '/',
    display: 'standalone',
    background_color: '#1A1A2E',
    theme_color: '#FF8C00',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
