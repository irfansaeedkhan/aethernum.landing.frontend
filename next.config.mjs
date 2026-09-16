/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone is for Docker/ECS. Vercel sets VERCEL=1 and manages its own output.
  ...(process.env.VERCEL ? {} : { output: "standalone" }),
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    qualities: [65, 70, 75],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;
