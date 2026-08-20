import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // ✅ FIX: Tambah format modern WebP dan AVIF untuk optimasi otomatis
    // Next.js akan serve format terbaik berdasarkan browser yang mendukung
    formats: ['image/avif', 'image/webp'],

    // Device sizes untuk responsive image srcset — mencakup semua breakpoint
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // Image sizes untuk gambar dengan width tetap (bukan full viewport)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Remote patterns untuk gambar eksternal
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],

    // Minimal TTL untuk cache image (1 hari) — sesuai dengan revalidate: 3600 di halaman
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
