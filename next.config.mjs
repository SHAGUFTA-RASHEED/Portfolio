/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  trailingSlash: true, 
  typescript: {
    ignoreBuildErrors: true,
    
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
