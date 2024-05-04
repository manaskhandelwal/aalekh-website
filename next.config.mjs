/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/2024",
        destination: "/2k24",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
