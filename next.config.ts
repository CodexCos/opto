module.exports = {
  async headers() {
    return [
      // {
      //   // Apply Cache-Control header to all static pages
      //   source: '/:path*', // Match any static page
      //   headers: [
      //     {
      //       key: 'Cache-Control',
      //       value: 'public, max-age=3600, immutable', // 1 hour, static pages won't change
      //     },
      //   ],
      // },
      {
        // Apply Cache-Control header to specific static assets like images
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year for static assets
          },
        ],
      },
    ];
  },
};
