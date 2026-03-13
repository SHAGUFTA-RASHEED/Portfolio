/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/https://shagufta-rasheed.github.io/Portfolio/',
  typescript: {
    ignoreBuildErrors: true,
    
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
