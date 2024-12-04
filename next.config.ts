// next.config.js

module.exports = {

  // images: { unoptimized: true },
  // // Disable server-side features for static export

  async headers() {
    return [
      {
        source: "/:all*(jpg|jpeg|png|gif|webp|avif)",
                headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',  // Cache for 1 year
          },
        ],
      },
    ];
  },
};
