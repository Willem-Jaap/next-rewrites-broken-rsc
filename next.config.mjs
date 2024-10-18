/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
            {
                source: "/blog/:path*",
                destination: "/internal-blog/:path*",
            },
        ];
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
