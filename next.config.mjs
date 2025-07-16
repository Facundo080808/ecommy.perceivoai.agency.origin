/** @type {import('next').NextConfig} */
const nextConfig = {
  // Usar renderizado estático para asegurar comportamiento predecible
  output: 'export',
  // Desactivar optimizaciones que puedan afectar el comportamiento inicial
  optimizeFonts: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
