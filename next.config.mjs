/** @type {import('next').NextConfig} */
const nextConfig = {
  
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
