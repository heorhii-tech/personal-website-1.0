/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"], // Разрешить изображения с Firebase
  },
};

export default nextConfig;
